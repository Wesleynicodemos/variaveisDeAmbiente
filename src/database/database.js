function connectToDataBase(user,password) {
    if (user === process.env.DATABASEUSER && password === process.env.DATABASEPASSWORD) {
        console.log('Connected to Data Base.')
    } else {
        console.log('Database connection Failed')
    }
}

export default connectToDataBase