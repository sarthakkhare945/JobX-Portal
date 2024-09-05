// error middlewares

const errorMiddleware = (error,req,res,next) =>{
    console.log(error)
    res.status(500).send({
        success: false,
        // message: 'Server Error',
        error
    })

}

export default errorMiddleware