const API_URL = process.env.API_MAIL_PATH
export default async function handler(req, res) {
    const {data} = req.body;
    // console.log(`${API_URL}/send-mail.php`, data)
    try {
      const resu = await fetch(`${API_URL}/send-mail.php`, {
        method: "POST",
        cache: 'no-store' ,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            userName: data.userName,
            email: data.email,
            number: data.number,
            msg: data.msg,
            from: data.from,
            to: data.to
        })
      })
      const resData = await resu.json()
      // console.log('response:',resData, data)
      return res.json(resData)
      
     
  
    } catch (error) {
      console.error('error-respons',error)
      return res.status(error.status || 500).end(error.message)
    }
  }