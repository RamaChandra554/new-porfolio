// JSON data for certificates
const certificatesData = [
    {
        id: 1,
        image: "./images/certifications/ux desiner.PNG",
        title: "Graphic Design and Basics of UI/UX",
        types: "Figma, Adobe Photoshop, Illustrator",
        description: "This certificate validates completion of a comprehensive course in UI/UX design and graphic design fundamentals.",
        issuer: "Design Institute",
        link: "#"
    },
    {
        id: 2,
        image: "./images/certifications/upslide-Hackthon.png",
        title: "UpSlide Figma Hackthon",
        types: "Figma",
        description: "Awarded for participation and achievement in the UpSlide Figma Hackathon competition.",
        issuer: "UpSlide",
        link: "#"
    },
    {
        id: 3,
        image: "./images/certifications/Front End.png",
        title: "Front-end Development",
        types: "HTML, CSS, GitHub, JavaScript, React",
        description: "This certificate validates completion of a comprehensive course in front-end development.",
        issuer: "Coding Institute",
        link: "#"
    },
    {
        id: 4,
        image: "./images/certifications/Google Digital.png",
        title: "Google Fundamentals of Digital Marketing",
        types: "Digital Marketing",
        description: "Certificate for completing the fundamentals of digital marketing course by Google.",
        issuer: "Google",
        link: "#"
    },
    {
        id: 5,
        image: "./images/certifications/Orntho.jpg",
        title: "Andhra University One day Project",
        types: "Hand-Models",
        description: "Certificate for participation in the one day project at Andhra University.",
        issuer: "Andhra University",
        link: "#"
    },
    {
        id: 6,
        image: "./images/certifications/Basic java Programing.png",
        title: "JavaScript Programming Basics",
        types: "JavaScript",
        description: "Certificate for completing the basic JavaScript programming course.",
        issuer: "Programming Academy",
        link: "#"
    },
    {
        id: 7,
        image: "./images/certifications/C.T.T.C.jpg",
        title: "Graphic Design and UI/UX",
        types: "Adobe Photoshop, MS-Office",
        description: "Certificate for completing the graphic design and UI/UX course.",
        issuer: "CTTC",
        link: "#"
    }
];

// Function to generate certificate cards
function generateCertificateCards() {
    const container = document.getElementById('certificates-container');
    
    certificatesData.forEach(cert => {
        const card = document.createElement('div');
        card.className = 'col-sm-6 col-lg-4';
        card.innerHTML = `
            <div class="card border-0 position-relative overflow-hidden">
                <img src="${cert.image}" class="card-img-top" alt="${cert.title}">
                <a href="#" class="stretched-link" data-bs-toggle="modal" data-bs-target="#certificate-modal" 
                   onclick="populateModal(${cert.id})"></a>
                <div class="card-img-overlay-custom text-center">
                    <div class="certificate-title">${cert.title}</div>
                    <div class="certificate-types">${cert.types}</div>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
}

// Function to populate modal with certificate data
function populateModal(certId) {
    const cert = certificatesData.find(c => c.id === certId);
    if (cert) {
        document.getElementById('modal-certificate-image').src = cert.image;
        document.getElementById('modal-certificate-image').alt = cert.title;
        document.getElementById('modal-certificate-title').textContent = cert.title;
        document.getElementById('modal-certificate-description').textContent = cert.description;
        document.getElementById('modal-certificate-issuer').textContent = `Issued by: ${cert.issuer}`;
        document.getElementById('modal-certificate-link').href = cert.link;
    }
}

// Generate certificates when page loads
document.addEventListener('DOMContentLoaded', generateCertificateCards);  
