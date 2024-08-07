import React from 'react'

function AboutApurvaComponent() {
    const lazyRoot = React.useRef(null)
    const [id, setId] = React.useState('bu-3')
    function onMouseOverHandle(id) {
        setId(id)
    }
    return (
        <div>
            <div className="section-full b_nature bg-white why-us wow fadeIn">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="nob_left_box">
                                <div className="head-block">
                                    <h4 className="w-title">Quality Check</h4>
                                    <p className="w-title1">Setting the Benchmark for Qaulity</p>
                                </div></div></div>
                        <div className="col-md-9">
                            <div className="nob_box">
                                <div className="acco-container" ref={lazyRoot}>
                                    <ul className="accordion-group">
                                        <li className={`lazy bu-1 ${id == 'bu-1' ? 'out' : ''} `} onMouseOver={() => onMouseOverHandle('bu-1')}>
                                            <img src="/images/qaulity/qaulity.jpg" alt="" />
                                            <div className="accordion-overlay"></div>
                                            <h3>Quality Assurance<i className="fa fa-long-arrow-right" aria-hidden="true"></i></h3>
                                            <section><article>
                                                <h4>Quality Assurance</h4>
                                                <ul>
                                                <p><b>Quality Assurance:</b> We follow strict norms in production and inspection to deliver defect-free products.</p>
<p><b>Techniques:</b> Advanced methods like SPC, FMEA, and 5S ensure top-quality practices. </p>
<p><b>Preventive Measures:</b> Horizontal deployment ensures consistent quality across product lines. </p>
<p><b>OEM Collaboration:</b>Direct online links with OEMs maintain alignment with their standards.
</p></ul></article>
                                            </section></li>
                                        <li className={`lazy bu-2 ${id == 'bu-2' ? 'out' : ''} `} onMouseOver={() => onMouseOverHandle('bu-2')}>
                                            <img src="/images/qaulity/qaulity2.jpg" alt="" /><div className="accordion-overlay"></div>
                                            <h3>Deflection Testing And Tensile Testing<i className="fa fa-long-arrow-right" aria-hidden="true"></i></h3><section>
                                                <article><h4>Deflection Testing And Tensile Testing</h4>
                                                <p><strong>Purpose:</strong> These tests evaluate the strength and flexibility of materials used in our products.</p>
                                                <p><strong>Equipment:</strong> Includes advanced machinery capable of measuring material deflection under load and determining tensile strength, ensuring products meet rigorous performance standards.</p>
                                                <p><strong> Benefits:</strong> Enables precise assessment of material properties to ensure durability and reliability in various applications.
                                            </p></article>
                                            </section></li>
                                        <li className={`lazy bu-3 ${id == 'bu-3' ? 'out' : ''} `} onMouseOver={() => onMouseOverHandle('bu-3')}>
                                            <img src="/images/qaulity/qaulity3.jpg" alt="" />
                                            <div className="accordion-overlay"></div>
                                            <h3>Coating Thickness Equipment: <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                                            </h3>
                                            <section><article>
                                                <h4>Coating Thickness Equipment:</h4>
                                                <p><stong>Purpose:</stong> Measures the thickness of coatings applied to our products, ensuring uniformity and adherence to specifications.</p>
<p><strong>Equipment:</strong> Utilizes specialized tools and gauges to accurately gauge coating thickness, critical for corrosion protection and aesthetic quality.</p>
<p><strong>Benefits:</strong> Ensures consistent product quality and performance by verifying coating integrity and adherence.
</p></article>
                                            </section></li>
                                        <li className={`lazy bu-4 ${id == 'bu-4' ? 'out' : ''} `} onMouseOver={() => onMouseOverHandle('bu-4')}>
                                            <img src="/images/qaulity/qaulity4.jpg" alt="" />
                                            <div className="accordion-overlay"></div>
                                            <h3>Tensile Testing Machine:<i className="fa fa-long-arrow-right" aria-hidden="true"
                                            ></i></h3><section><article>
                                                <h4>Tensile Testing Machine:</h4>
                                                <p><strong>Purpose:</strong> Determines the tensile strength and elongation properties of materials, crucial for assessing product durability and safety.</p>
<p><strong>Equipment:</strong> Employs advanced testing machines capable of applying controlled tensile forces to samples and measuring their response.</p>
<p><strong>Benefits:</strong> Provides essential data for material selection, quality control, and compliance with industry standards, ensuring reliable performance in diverse applications.
</p></article>
                                            </section></li></ul></div></div></div></div></div></div>
        </div>
        

   )
}

export default AboutApurvaComponent
