import html2canvas from 'html2canvas';

const DownloadPageAsJPG = () => {
  // Function to capture the page and trigger download as JPG
  const handleDownload = () => {
    // Select the element to capture (e.g., the entire page)
    const element = document.getElementById('div.resume-container');

    // Use html2canvas to render the element as a canvas
    html2canvas(element).then((canvas) => {
      // Convert the canvas to a data URL (JPG format)
      const imageUrl = canvas.toDataURL('image/jpeg');

      // Create an anchor element to trigger the download
      const link = document.createElement('a');
      link.href = imageUrl;
      link.download = 'downloaded-page.jpg'; // The name of the image file
      link.click(); // Programmatically click the link to trigger the download
    });
  };

  return (
    <div>
      <h1>Your Page Content</h1>
      <p>This content will be captured and downloaded as a JPG when you click the button below.</p>

      {/* Button to trigger the download */}
      <button onClick={handleDownload}>Download Page as JPG</button>
    </div>
  );
};

export default DownloadPageAsJPG;
