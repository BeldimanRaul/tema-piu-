document.getElementById('schimba-tema').addEventListener('click', function() {
    if (document.body.classList.contains('dark-mode')) {
        document.body.classList.remove('dark-mode');
        document.body.classList.add('light-mode');
    } else {
        document.body.classList.remove('light-mode');
        document.body.classList.add('dark-mode');
    }
});

document.getElementById('varsta').addEventListener('click', function() {
    alert('Varsta mea (Lionel Messi) este de 36 de ani.');
});

document.getElementById('detalii').addEventListener('click', function() {

    document.getElementById('textdeschimbat').classList.toggle('text-buton-rosu');
})

document.getElementById('ascunde tabel').addEventListener('click', function() {
    let tabel = document.querySelector('.tabel'); 
    if (tabel.style.display === 'none') {
        tabel.style.display = 'table'; 
    } else {
        tabel.style.display = 'none'; 
    }
});