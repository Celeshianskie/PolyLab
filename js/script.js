const header = document.querySelector("header");
window.addEventListener ("scroll", function() {
	header.classList.toggle ("sticky", window.scrollY > 100);
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
	menu.classList.toggle('bx-x');
	navlist.classList.toggle('open');
};

window.onscroll = () => {
	menu.classList.remove('bx-x');
	navlist.classList.remove('open');
};


function handleFileUpload(event) {
    const files = event.target.files;
    const fileListContainer = document.getElementById('file-list');
    const downloadSection = document.getElementById('download-section');

    // Clear existing file list and download links
    fileListContainer.innerHTML = '';
    downloadSection.innerHTML = '';

    // Display uploaded files by type and generate download links
    for (const file of files) {
        const fileType = getFileType(file.name);

        // Display file in the file list
        const listItem = document.createElement('li');
        listItem.textContent = file.name;
        fileListContainer.appendChild(listItem);

        // Generate download link for the uploaded file
        const downloadUploadLink = document.createElement('a');
        downloadUploadLink.href = URL.createObjectURL(file);
        downloadUploadLink.download = file.name;
        downloadUploadLink.textContent = 'Download Uploaded ' + fileType.toUpperCase();
        downloadUploadLink.className = 'custom-file-download';
        downloadSection.appendChild(downloadUploadLink);
    }
}

function getFileType(fileName) {
    const extension = fileName.split('.').pop().toLowerCase();
    const fileTypeMap = {
        'pdf': 'PDF',
        'docx': 'Word Document',
        'xlsx': 'Excel Spreadsheet',
        'jpg': 'JPEG Image',
        'png': 'PNG Image',
        'mp3': 'MP3 Audio',
        'mp4': 'MP4 Video',
        'zip': 'ZIP Archive',
        'txt': 'Text File',
        'html': 'HTML File'
        // Add more file types if needed
    };
    return fileTypeMap[extension] || 'Other';
}
