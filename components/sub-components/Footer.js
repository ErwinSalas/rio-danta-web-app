export default ()=>(
    <section id="footer">
    <style jsx>{`
      .logo{
          marging : 0%;
          padding : 0%;
          height : 100%;
          width : 100%
      }

      .logo-space{
          margin : 2%;
          padding : 0%;
      }
    `}</style>
    
      <ul className="icons">
        <a href="#" className="btn-floating logo-space" ><i className="material-icons"><img src="static/images/icon/phone2.svg" className="logo" /></i></a>
        <a href="#" className="btn-floating logo-space"><i className="material-icons"><img src="static/images/icon/mail.svg" className="logo" /></i></a>
        <a href="https://www.google.co.cr/maps/place/Hostel+Rio+Danta/@10.477632,-84.6460057,17z/data=!3m1!4b1!4m5!3m4!1s0x8fa00c869512d4c5:0x4b0322488eaafb22!8m2!3d10.477632!4d-84.643817?hl=es" className="btn-floating logo-space"><i className="material-icons"><img src="static/images/icon/home.svg" className="logo" /></i></a>
        <a href="https://www.facebook.com/hotelriodanta/" className="btn-floating logo-space"><i className="material-icons"><img src="static/images/icon/facebook.svg" className="logo" height = "100%" width = "100%"/></i></a>
        <a href="#" className="btn-floating logo-space"><i className="material-icons"><img src="static/images/icon/whatsapp.svg" className="logo" /></i></a>
      </ul>


      <div className="copyright">
        <ul className="menu">
          <li>© Hostel Rio Danta.     Es un gusto servirle.</li><li>Nuestra Meta: Brindar Hospedaje y los mejores tours a un precio accesible</li>
        </ul>
      </div>
    </section>
);