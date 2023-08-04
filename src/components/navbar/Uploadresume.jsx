import React, { useState } from 'react';
import './res.css';

const UploadResumePage = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploading, setUploading] = useState(false);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleUpload = () => {
    if (selectedFile) {
      setUploading(true);
      // Create a FormData object to hold the file and additional data (if needed)
      const formData = new FormData();
      formData.append('resume', selectedFile);

      // Here, you can make an API call to upload the file to the server
      // For demonstration purposes, we will use a setTimeout to simulate the upload
      setTimeout(() => {
        console.log('Uploaded file:', selectedFile.name);
        // Reset the selected file state after processing
        setSelectedFile(null);
        setUploading(false);
      }, 2000); // Simulating a 2-second upload time
    }
  };

  const handleChooseFile = () => {
    document.getElementById('resume-file-input').click();
  };

  return (
    <div className="upload-resume-page">
      <div className="file-upload-container">
        <h3>Upload Resume</h3>
        <p>Please select your resume file in PDF, DOC, or DOCX format:</p>
        <button onClick={handleChooseFile}>Choose File</button>
        <input
          type="file"
          id="resume-file-input"
          onChange={handleFileChange}
          accept=".pdf,.doc,.docx"
          style={{ display: 'none' }}
        />
        {uploading ? (
          <p>Uploading file... Please wait.</p>
        ) : (
          <button onClick={handleUpload} disabled={!selectedFile}>
            Upload Now
          </button>
        )}
      </div>
    </div>
  );
};

export default UploadResumePage;
