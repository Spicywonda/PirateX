function inyectarPirateX() {
    const titleElement = document.getElementById('appHubAppName');
    
    // --- MEJORA: Evitar la caja de Demo Wonder Imbecil---
    let zonaCompra = null;
    const posiblesZonas = document.querySelectorAll('.game_purchase_action_bg, .game_purchase_action');
    
    for (let zona of posiblesZonas) {
        if (!zona.closest('[id*="demo" i], [class*="demo" i]')) {
            zonaCompra = zona;
            break; 
        }
    }
    
    if (!titleElement || document.getElementById('piratex-container')) return;

    // 1. Datos de Juego
    const rawGameName = titleElement.innerText.trim();
    const searchName = encodeURIComponent(rawGameName); 
    const slugName = rawGameName.toLowerCase()
                                .replace(/[^a-z0-9]+/g, '-') 
                                .replace(/(^-|-$)/g, ''); 
                                
    // --- NUEVO: Formato específico para GOG GAMES (usa guiones bajos) ---
    const gogSlug = rawGameName.toLowerCase()
                               .replace(/[^a-z0-9]+/g, '_')
                               .replace(/(^_|_$)/g, '');

    // 2. Contenedor principal
    const container = document.createElement('div');
    container.id = 'piratex-container';
    container.style.cssText = 'display: inline-flex; position: relative; margin-left: 10px; align-items: center; vertical-align: top; z-index: 9999;';

    // 3. Botón principal PirateX
    const btn = document.createElement('button');
    
    const imgLogo = document.createElement('img');
    imgLogo.src = 'https://i.ibb.co/hFNPbKVC/luna-removebg-preview.png';
    imgLogo.style.cssText = 'width: 16px; height: 16px; margin-right: 8px; filter: invert(1) drop-shadow(1px 1px 1px rgba(0,0,0,0.5)); vertical-align: middle;';
    
    const textoBtn = document.createElement('span');
    textoBtn.innerText = 'PirateX';
    textoBtn.style.verticalAlign = 'middle';

    btn.appendChild(imgLogo);
    btn.appendChild(textoBtn);
    
    btn.style.cssText = `
        background: linear-gradient(to right, #75b022 5%, #588a1b 95%);
        color: #d2efa9;
        border: none;
        padding: 8px 18px;
        border-radius: 2px;
        cursor: pointer;
        font-family: "Motiva Sans", Arial, sans-serif;
        font-size: 14px;
        font-weight: bold;
        box-shadow: 0 4px 6px rgba(0,0,0,0.3);
        text-shadow: 1px 1px 2px rgba(0,0,0,0.5);
        display: flex;
        align-items: center;
        transition: all 0.15s ease-in-out;
    `;
    
    // Animaciones
    btn.onmouseover = () => { 
        btn.style.background = 'linear-gradient(to right, #8ed629 5%, #6aa620 95%)'; 
        btn.style.color = '#ffffff';
        btn.style.transform = 'translateY(-1px)';
        btn.style.boxShadow = '0 6px 12px rgba(0,0,0,0.4)';
    };
    btn.onmouseout = () => { 
        btn.style.background = 'linear-gradient(to right, #75b022 5%, #588a1b 95%)'; 
        btn.style.color = '#d2efa9';
        btn.style.transform = 'translateY(0)';
        btn.style.boxShadow = '0 4px 6px rgba(0,0,0,0.3)';
    };
    btn.onmousedown = () => {
        btn.style.transform = 'translateY(2px)';
        btn.style.boxShadow = '0 2px 3px rgba(0,0,0,0.3)';
    };
    btn.onmouseup = () => {
        btn.style.transform = 'translateY(-1px)';
        btn.style.boxShadow = '0 6px 12px rgba(0,0,0,0.4)';
    };

    // 4. El Menú Desplegable
    const dropdown = document.createElement('div');
    dropdown.style.cssText = `
        display: none;
        position: absolute;
        top: 115%;
        right: 0;
        background-color: #1b2838;
        min-width: 200px;
        border: 1px solid #2a475e;
        border-radius: 4px;
        box-shadow: 0px 10px 20px rgba(0,0,0,0.6);
        padding: 4px 0;
        overflow: hidden;
    `;

    // 5. LISTA DE PÁGINAS ACTUALIZADA
    const paginas = [
        { nombre: 'Skidrow & Reloaded', url: `https://www.skidrowreloaded.com/?s=${searchName}` },
        { nombre: 'Rexagames', url: `https://rexagames.com/search/?q=${searchName}` }, 
        { nombre: 'Ankergames', url: `https://ankergames.net/game/${slugName}` },
        { nombre: 'Astral Games', url: `https://astral-games.xyz/game/${slugName}` },
        { nombre: 'GOG GAMES', url: `https://gog-games.to/game/${gogSlug}` }
    ];

    paginas.forEach(pag => {
        const link = document.createElement('a');
        link.innerText = pag.nombre;
        link.href = pag.url;
        link.target = '_blank';
        link.style.cssText = `
            display: block;
            color: #66c0f4;
            text-decoration: none;
            padding: 10px 15px;
            font-size: 13px;
            border-bottom: 1px solid #233c51;
            transition: 0.2s;
        `;
        link.onmouseover = () => { link.style.backgroundColor = '#233c51'; link.style.color = '#fff'; };
        link.onmouseout = () => { link.style.backgroundColor = 'transparent'; link.style.color = '#66c0f4'; };
        dropdown.appendChild(link);
    });
    
    if (dropdown.lastChild) dropdown.lastChild.style.borderBottom = 'none';

    // 6. Lógica de apertura
    btn.onclick = (e) => {
        e.stopPropagation();
        dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
    };

    document.addEventListener('click', () => dropdown.style.display = 'none');

    // 7. Inserción
    container.appendChild(btn);
    container.appendChild(dropdown);
    
    if (zonaCompra) {
        zonaCompra.appendChild(container);
    } else {
        titleElement.insertAdjacentElement('afterend', container);
    }
}

// Vigilante
const observer = new MutationObserver(() => {
    if (document.getElementById('appHubAppName')) {
        inyectarPirateX();
    }
});

observer.observe(document.body, { childList: true, subtree: true });
inyectarPirateX();
