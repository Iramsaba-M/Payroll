
// excelUtils.js
import ExcelJS from 'exceljs';
import * as jsPDF from 'jspdf';
import 'jspdf-autotable';
import { saveAs } from 'file-saver';
import axios from 'axios';

 // Function to concatenate first name, middle name, and last name
 export const concatenateName = (First_Name, Middle_Name, Last_Name) => {
  return [First_Name, Middle_Name, Last_Name].filter(Boolean).join(' ');
};

export const generateTemplate = async () => {
  const url = 'http://192.168.0.126:8000/api/download_template';

  try {
    const response = await fetch(url, {
      method: 'POST',  // Change the method to POST
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({}),  // You might need to include some dummy data
    });

    if (response.ok) {
      const blob = await response.blob();
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = 'employee_template.xlsx';
      link.click();
    } else {
      console.error('Error fetching template:', response.status, response.statusText);
    }
  } catch (error) {
    console.error('Error fetching template:', error);
  }
};



export const uploadEmployeeData = async (data, file) => {
  const url = 'http://192.168.0.126:8000/api/upload_and_process';

  const formData = new FormData();
  formData.append('upload_file', file);

  // Append other data fields to the FormData object
  Object.entries(data).forEach(([key, value]) => {
    formData.append(key, value);
  });

  try {
    const response = await fetch(url, {
      method: 'POST',
      body: formData,
    });

    if (response.ok) {
      console.log('Data uploaded successfully:', data);
    } else {
      console.error('Error uploading data:', response.status, response.statusText);
    }
  } catch (error) {
    console.error('Error uploading data:', error);
  }
};


export const parseExcelFile = async (file) => {
  const workbook = new ExcelJS.Workbook();
  const data = [];

  // Load the workbook from the uploaded file
  await workbook.xlsx.load(file);

  // Assuming the data is in the first worksheet
  const worksheet = workbook.getWorksheet(1);

  // Get the column names from the first row
  const columnNames = worksheet.getRow(1).values;

  console.log('Column Names:', columnNames);

 

  // Iterate through rows and columns to extract data
  worksheet.eachRow((row, rowNumber) => {
    if (rowNumber > 1) {
      let currentEmployee = {};
      let currentEmployeeName = '';

      row.eachCell((cell, columnIndex) => {
        console.log(`Row ${rowNumber}, Column ${columnIndex}:`, cell.value);

        if (columnNames[columnIndex] === 'date_of_joining') {
          // Format the date to "DD/MM/YYYY"
          const formattedDate = cell.value
            ? new Date(cell.value).toLocaleDateString('en-GB', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric',
              })
            : null;
          currentEmployee['JOINING_DATE'] = formattedDate; // Assign to 'JOINING_DATE'
        
        } else if (columnNames[columnIndex].toLowerCase().includes('name')) {
          // Concatenate first name, middle name, and last name
          currentEmployeeName += cell.value ? cell.value.trim() + ' ' : '';
          if (columnNames[columnIndex] === 'Last_Name') {
            // If the current column is 'lname', add the concatenated employee name to the currentEmployee
            currentEmployee['EMPLOYEE_NAME'] = currentEmployeeName.trim();
            currentEmployeeName = ''; // Reset for the next set of rows
          }
        } else if (columnNames[columnIndex] === 'designation') {
          // Map "designation" to "Designation"
          currentEmployee['DESIGNATION'] = cell.value;
        } else if (typeof cell.value === 'string') {
          // Handle string values
          currentEmployee[columnNames[columnIndex]] = cell.value.trim(); // Remove leading/trailing spaces
        } else {
          // Default handling for other data types
          currentEmployee[columnNames[columnIndex]] = cell.value;
        }
      });

      // Add the currentEmployee to the data array
      data.push(currentEmployee);
    }
  });

  // Log the extracted data with formatted dates
  console.log('Extracted Data:', data);

  return data;
};
export const exportToPDF = async () => {
  try {
    const response = await axios.get("http://192.168.0.126:8000/employees/");
    const data = response.data;

    const columns = Object.keys(data[0]);
    const rows = data.map(employee => Object.values(employee));

    const doc = new jsPDF();
    doc.autoTable({
      head: [columns],
      body: rows,
    });

    doc.save('employee_data.pdf');
  } catch (error) {
    console.error('Error fetching data for PDF export:', error);
  }
};

export const exportToExcel = async () => {
  try {
    const response = await axios.get("http://192.168.0.126:8000/employees/");
    const data = response.data;

    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Employee Data');

    // Add column headers
    const columns = Object.keys(data[0]);
    worksheet.addRow(columns);

    // Add data rows
    data.forEach(employee => {
      const values = columns.map(column => employee[column]);
      worksheet.addRow(values);
    });

    // Save the workbook
    workbook.xlsx.writeBuffer().then(buffer => {
      const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      saveAs(blob, 'employee_data.xlsx');
    });
  } catch (error) {
    console.error('Error fetching data for Excel export:', error);
  }
};

export const exportToCSV = async () => {
  try {
    const response = await axios.get("http://192.168.0.126:8000/employees/");
    const data = response.data;

    const columns = Object.keys(data[0]);
    const rows = data.map(employee => Object.values(employee));

    const csvContent = [
      columns.join(','),
      ...rows.map(row => row.join(',')),
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    saveAs(blob, 'employee_data.csv');
  } catch (error) {
    console.error('Error fetching data for CSV export:', error);
  }
};