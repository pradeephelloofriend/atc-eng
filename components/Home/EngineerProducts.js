import React from "react";

function EngineerProducts() {
  const lazyRoot = React.useRef(null)
  const [id, setId] = React.useState('bu-3')
  function onMouseOverHandle(id) {
      setId(id)
  }
  return (
    
    <div className="">
        <div className="section-full b_nature bg-white why-us wow fadeIn">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3">
                        <div className="nob_left_box">
                            <div className="head-block">
                                <h4 className="w-title">Engineer Products</h4></div>
                                <p className="w-title1">Setting the Benchmark for Qaulity</p>
                            </div></div>
                            
                            <div className="col-md-9" >
                            <div className="nob_box">
                                <div className="acco-container" ref={lazyRoot}>
                                 <ul className="accordion-group">
                                    <li className={`lazy bu-1 ${id == 'bu-1' ? 'out' : ''} `} onMouseOver={() => onMouseOverHandle('bu-1')}>
                                    <img src="/images/products/home (4).png" alt="" />
                                    <div className="accordion-overlay"></div>
                                            <h3>Home Appliances<i className="fa fa-long-arrow-right" aria-hidden="true"></i></h3>
                                            <section><article>
                                                <h4>Home Appliances</h4>
                                                <p><b>Quality Assurance:</b> We follow strict norms in production and inspection to deliver defect-free products.</p>
<p><b>Techniques:</b> Advanced methods like SPC, FMEA, and 5S ensure top-quality practices. </p>
<p><b>Preventive Measures:</b> Horizontal deployment ensures consistent quality across product lines. </p>
<p><b>OEM Collaboration:</b>Direct online links with OEMs maintain alignment with their standards.
</p></article> </section></li>

<li className={`lazy bu-2 ${id == 'bu-2' ? 'out' : ''} `} onMouseOver={() => onMouseOverHandle('bu-2')}>
                                    <img src="/images/products/telecomm6.jpg" alt="" />
                                    <div className="accordion-overlay"></div>
                                            <h3>TeleComm Appliances<i className="fa fa-long-arrow-right" aria-hidden="true"></i></h3>
                                            <section><article>
                                                <h4>TeleComm Appliances</h4>
                                                <p><b>Quality Assurance:</b> We follow strict norms in production and inspection to deliver defect-free products.</p>
<p><b>Techniques:</b> Advanced methods like SPC, FMEA, and 5S ensure top-quality practices. </p>
<p><b>Preventive Measures:</b> Horizontal deployment ensures consistent quality across product lines. </p>
<p><b>OEM Collaboration:</b>Direct online links with OEMs maintain alignment with their standards.
</p></article> </section></li>
</ul>
                            </div></div></div>
                            </div>  </div>   </div>   </div>   

                            );
}
export default EngineerProducts