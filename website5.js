
// service
document.addEventListener("DOMContentLoaded", function() {
    const services = [
        { icon: "fa fa-ship", title: "SEA FREIGHT", description: "A small river named Duden flows by their place and supplies it with the necessary regelialia." },
        { icon: "fa fa-plane", title: "AIR FREIGHT", description: "A small river named Duden flows by their place and supplies it with the necessary regelialia." },
        { icon: "fa fa-shopping-cart", title: "PACKAGE FORWARDING", description: "A small river named Duden flows by their place and supplies it with the necessary regelialia." },
        { icon: "fa fa-truck", title: "TRUCKING", description: "A small river named Duden flows by their place and supplies it with the necessary regelialia." },
        { icon: "fa fa-home", title: "WAREHOUSE", description: "A small river named Duden flows by their place and supplies it with the necessary regelialia." },
        { icon: "fa fa-drivers-license", title: "DELIVERY", description: "A small river named Duden flows by their place and supplies it with the necessary regelialia." }
    ];

    const serviceContainer = document.getElementById("service-container");

    services.forEach(service => {
        const container = document.createElement("div");
        container.classList.add("container");
        container.innerHTML = `
            <i class="${service.icon}"></i>
            <h3>${service.title}</h3>
            <p>${service.description}</p>
        `;
        serviceContainer.appendChild(container);
    });
});

// our staff
document.addEventListener('DOMContentLoaded', function() {

    const staffMembers = [
        {
            name: 'MAX CARLSON',
            position: 'CO-FOUNDER',
            image: 'person_1.jpg.webp',
            socialMedia: {
                facebook: '#',
                twitter: '#',
                instagram: '#'
            }
        },
        {
            name: 'CHARLOTTE PILAT',
            position: 'CO-FOUNDER',
            image: 'person_2.jpg.webp',
            socialMedia: {
                facebook: '#',
                twitter: '#',
                instagram: '#'
            }
        },
        {
            name: 'NICOLE LEWIS',
            position: 'CO-FOUNDER',
            image: 'person_3.jpg.webp',
            socialMedia: {
                facebook: '#',
                twitter: '#',
                instagram: '#'
            }
        },
        {
            name: 'JEAN SMITH',
            position: 'FINANCIAL MANAGER',
            image: 'person_2.jpg.webp',
            socialMedia: {
                facebook: '#',
                twitter: '#',
                instagram: '#'
            }
        },
        {
            name:'BOB CARRY',
            position: 'LOADER MANAGER',
            image: 'person_1.jpg.webp',
            socialMedia: {
                facebook: '#',
                twitter: '#',
                instagram: '#'
            }
        },
        {
            name: 'ANNE FISHER',
            position: 'PACKAGE MANAGER',
            image: 'person_2.jpg.webp',
            socialMedia: {
                facebook: '#',
                twitter: '#',
                instagram: '#'
            }
        },
    ];

    function generateStaffHTML(member) {
        return `
            <div>
                <img src="${member.image}">
                <h4>${member.name}</h4>
                <h6>${member.position}</h6>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                <i class="fa fa-facebook-square"><a href="${member.socialMedia.facebook}"></a></i>
                <i class="fa fa-twitter-square"><a href="${member.socialMedia.twitter}"></a></i>
                <i class="fa fa-instagram"><a href="${member.socialMedia.instagram}"></a></i>
            </div>
        `;
    }

    // Function to append staff HTML to the container
    function renderStaff() {
        const container = document.querySelector('.staff-container');
        staffMembers.forEach(function(member) {
            container.innerHTML += generateStaffHTML(member);
        });
    }

    renderStaff();
});

// pricing
document.addEventListener("DOMContentLoaded", function() {
    const pricingOptions = [
        { name: "BASIC", price: 47, features: ["Officia quaerat eaque neque", "Possimus aut consequuntur incidunt", "Lorem ipsum dolor sit amet", "Consectetur adipisicing elit", "Dolorum esse odio quas architecto sint"] },
        { name: "PREMIUM", price: 200, features: ["Officia quaerat eaque neque", "Possimus aut consequuntur incidunt", "Lorem ipsum dolor sit amet", "Consectetur adipisicing elit", "Dolorum esse odio quas architecto sint"] },
        { name: "PROFESSIONAL", price: 750, features: ["Officia quaerat eaque neque", "Possimus aut consequuntur incidunt", "Lorem ipsum dolor sit amet", "Consectetur adipisicing elit", "Dolorum esse odio quas architecto sint"] }
    ];

    const pricingContainer = document.getElementById("pricing-container");

    pricingOptions.forEach(option => {
        const div = document.createElement("div");
        div.innerHTML = `
            <h2>${option.name}</h2>
            <i class="fa fa-dollar">${option.price}</i>
            <span>/ year</span>
            <ul>
                ${option.features.map(feature => `<li><i class="fa fa-check"></i> ${feature}</li>`).join("")}
            </ul>
            <button><a href="#" onclick="buyNow('${option.name}')">Buy Now</a></button>
        `;
        pricingContainer.appendChild(div);
    });
});

function buyNow(planName) {
    alert(`You clicked Buy Now for ${planName}`);
    // Add your buy now logic here
}

