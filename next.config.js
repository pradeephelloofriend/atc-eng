
module.exports = {
    modules: true,
    
    swcMinify: false,
    images: {
        //domains: ['localhost'],
        deviceSizes: [320, 420, 768, 1024, 1200],
        loader: "default",
        domains: ["res.cloudinary.com"],

    },
    env:{
        API_MAIL_PATH:"https://speedtrack.co.in/api/react/sendMail"
    },

   
}