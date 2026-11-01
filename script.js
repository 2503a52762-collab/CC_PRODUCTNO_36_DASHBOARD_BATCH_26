let uploadedCount = 24;
let convertedCount = 21;

const physicalButton = document.getElementById("physicalButton");

physicalButton.addEventListener("click", simulateUpload);


function simulateUpload() {

    const buttonText = document.getElementById("buttonText");
    const progressFill = document.getElementById("progressFill");
    const progressText = document.getElementById("progressText");
    const progressMessage = document.getElementById("progressMessage");

    const converterStatus =
        document.getElementById("converterStatus");

    const converterLed =
        document.getElementById("converterLed");

    const conversionStatus =
        document.getElementById("conversionStatus");

    const fileName =
        document.getElementById("fileName");

    const fileSize =
        document.getElementById("fileSize");

    const inputFormat =
        document.getElementById("inputFormat");

    const outputFormat =
        document.getElementById("outputFormat");


    // SAMPLE FILE

    fileName.innerText = "sample.pdf";
    fileSize.innerText = "2.4 MB";

    inputFormat.innerText = "PDF";
    outputFormat.innerText = "TXT";


    // START

    buttonText.innerText =
        "Button pressed! Starting upload...";

    converterStatus.innerText = "UPLOADING";

    converterLed.className = "led yellow";

    conversionStatus.innerText =
        "Uploading file to AWS S3...";

    conversionStatus.style.background =
        "#fef3c7";

    conversionStatus.style.color =
        "#a16207";


    let progress = 0;

    progressFill.style.width = "0%";
    progressText.innerText = "0%";


    const upload = setInterval(function () {

        progress += 5;

        progressFill.style.width = progress + "%";
        progressText.innerText = progress + "%";


        if (progress < 50) {

            progressMessage.innerText =
                "Uploading sample.pdf to AWS S3...";

        } else if (progress < 80) {

            converterStatus.innerText =
                "CONVERTING";

            conversionStatus.innerText =
                "Converting PDF → TXT...";

            progressMessage.innerText =
                "File uploaded. Conversion in progress...";

        } else {

            progressMessage.innerText =
                "Finalizing converted file...";

        }


        if (progress >= 100) {

            clearInterval(upload);

            uploadComplete();

        }

    }, 100);

}


function uploadComplete() {

    const buttonText =
        document.getElementById("buttonText");

    const converterStatus =
        document.getElementById("converterStatus");

    const converterLed =
        document.getElementById("converterLed");

    const conversionStatus =
        document.getElementById("conversionStatus");

    const progressMessage =
        document.getElementById("progressMessage");

    const uploadedCounter =
        document.getElementById("uploadedCount");

    const convertedCounter =
        document.getElementById("convertedCount");

    const fileTable =
        document.getElementById("fileTable");


    buttonText.innerText =
        "File successfully dropped!";

    converterStatus.innerText =
        "READY";

    converterLed.className =
        "led green";


    conversionStatus.innerText =
        "✓ Conversion completed successfully";

    conversionStatus.style.background =
        "#dcfce7";

    conversionStatus.style.color =
        "#15803d";


    progressMessage.innerText =
        "✓ File uploaded to S3 and converted successfully";


    uploadedCount++;
    convertedCount++;


    uploadedCounter.innerText =
        uploadedCount;

    convertedCounter.innerText =
        convertedCount;


    // ADD NEW FILE TO TABLE

    const newRow =
        document.createElement("tr");

    newRow.innerHTML = `
        <td>📄 sample.pdf</td>
        <td>2.4 MB</td>
        <td>PDF → TXT</td>
        <td>
            <span class="status complete">
                ✓ Complete
            </span>
        </td>
    `;

    fileTable.prepend(newRow);
}