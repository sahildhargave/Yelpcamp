app.get('/fakeUser', async(req, res) => {
    const user = new User({ email: 'sa@gmail.com', username: 'hil ' });
    const newUser = await User.register(user, 'hil');
    res.send(newUser);
})