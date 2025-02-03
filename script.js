document.addEventListener("DOMContentLoaded", function () {
    const cube = document.getElementById("cube");
    const portfolio = document.getElementById("portfolio");
    const scene = document.getElementById("scene");
    const skillItems = document.querySelectorAll("#skills li");
    const skillImage = document.getElementById("skill-image");
    const skillDescription = document.getElementById("skill-description");
    const skillDisplay = document.getElementById("skill-display");

    if (!cube || !portfolio || !scene) {
        console.error("Elemen yang dibutuhkan tidak ditemukan");
        return;
    }

    cube.addEventListener("click", function () {
        console.log("Kubus diklik, menampilkan portofolio...");
        scene.style.display = "none";
        portfolio.style.display = "block";
        portfolio.style.opacity = "1";
        portfolio.style.visibility = "visible";
    });

    const skillsData = {
        "HTML, CSS, JavaScript": {
            image: "skill-image/html-css-js.png",
            description: "Keahlian dalam pengembangan web dengan HTML, CSS, dan JavaScript, Dalam dunia pengembangan web, terdapat tiga teknologi utama yang digunakan untuk membangun situs web yang menarik dan interaktif: HTML, CSS, dan JavaScript. Ketiga teknologi ini bekerja bersama untuk menciptakan pengalaman pengguna yang dinamis dan responsif."
        },
        "Web3 Development": {
            image: "skill-image/web3-development.png",
            description: "Membangun aplikasi desentralisasi dengan teknologi Web3, Web3 adalah evolusi terbaru dari internet yang berfokus pada desentralisasi dan transparansi melalui teknologi blockchain. Berbeda dengan Web2, yang didominasi oleh platform terpusat seperti Google, Facebook, dan Amazon, Web3 memungkinkan pengguna untuk memiliki kendali penuh atas data dan aset digital mereka tanpa perlu bergantung pada perantara."
        },
        "Blockchain Technology": {
            image: "skill-image/blockchain.png",
            description: "Mengembangkan solusi berbasis blockchain untuk keamanan dan transparansi data, Blockchain adalah teknologi penyimpanan data yang terdesentralisasi dan aman. Teknologi ini memungkinkan data tersimpan dalam bentuk blok yang saling terhubung dan tidak dapat diubah tanpa persetujuan jaringan. Blockchain pertama kali diperkenalkan melalui Bitcoin oleh seseorang dengan nama samaran Satoshi Nakamoto pada tahun 2008."
        },
        "UI/UX Design": {
            image: "skill-image/ui-ux.png",
            description: "Mendesain pengalaman pengguna yang menarik dan interaktif, UI (User Interface) dan UX (User Experience) adalah dua elemen penting dalam pengembangan aplikasi dan website yang berfokus pada tampilan visual serta pengalaman pengguna. UI berkaitan dengan desain tampilan seperti warna, tipografi, ikon, dan tata letak yang membuat aplikasi terlihat menarik dan mudah digunakan. Sementara itu, UX lebih menekankan bagaimana pengguna berinteraksi dengan sistem, memastikan navigasi yang intuitif dan pengalaman yang nyaman."
        }
    };

    skillItems.forEach(item => {
        item.addEventListener("click", function () {
            const skillName = item.textContent.trim();
            if (skillsData[skillName]) {
                skillImage.src = skillsData[skillName].image;
                skillImage.alt = skillName;
                skillDescription.textContent = skillsData[skillName].description;
                
                // Pastikan elemen gambar dan deskripsi muncul
                skillImage.style.display = "block";
                skillDescription.style.display = "block";
                skillDisplay.style.display = "block";
            } else {
                console.error("Data skill tidak ditemukan untuk:", skillName);
            }
        });
    });

    console.log("Script JS berhasil dimuat");
});
// JavaScript untuk animasi salju
const createSnowflake = () => {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    document.body.appendChild(snowflake);

    snowflake.style.left = `${Math.random() * 100}vw`;
    snowflake.style.animationDuration = `${Math.random() * 3 + 2}s`;
    snowflake.style.width = `${Math.random() * 5 + 2}px`;
    snowflake.style.height = snowflake.style.width;

    setTimeout(() => {
        snowflake.remove();
    }, 5000);
};

setInterval(createSnowflake, 100);