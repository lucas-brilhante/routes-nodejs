const routes = (req, res) => {
    const { method, url } = req;

    if (url === '/users') {
        res.write('<html>');
        res.write('<body><h1>Users</h1></body>')
        res.write('<body><ul><li>User 1</li><li>User 2</li><li>User 3</li><li>User 4</li></ul></body>')
        res.write('</html>');
        return res.end();
    }

    else if (url === '/create-user' && method === "POST") {
        let data = [];
        
        req.on('data', (chunk) => {
            data.push(chunk);
        }).on('end', () => {
            data = Buffer.concat(data).toString();
            const user = data.split('=')[1];
            res.write('<html>');
            res.write(`<body><h1>Create User: ${user}</h1></body>`)
            res.write('</html>');
            return res.end();
        })

    } else {
        res.write('<html>');
        res.write('<body><form action="/create-user" method="POST"><input name="message" type="text" /><button type="submit">Submit</button></form></body>')
        res.write('</html>');
        return res.end();
    }
}

module.exports = routes;