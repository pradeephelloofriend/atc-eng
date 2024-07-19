import React from 'react';
import { useRouter } from 'next/router';
import { DownOutlined } from '@ant-design/icons'
import { products } from '../../util/products';

const ContactDetailsComponent = () => {
    const router = useRouter();
    const [open, setOpen] = React.useState(false);
    const [open1, setOpen1] = React.useState(false);
    const [id, setId] = React.useState('');

    const openMenu = (id) => {
        setId(id)
        if (id == 1) {
            setOpen(!open)
            setOpen1(false)
        } else {
            setOpen(false)
            setOpen1(!open1)
        }
    }
    function handleClick(routeName, subrouteName, catCode, subCatCode)  {
        router.push({
            pathname: `/${routeName}/${subrouteName}`,
            query: {catCode: catCode, subCatCode: subCatCode}
        })

    }

    React.useEffect(()=>{
        //alert(id)
        
       

    },[id])
  return (
    <div className="section-full content-inner bg-white testi-area">
    <header id="page-header">
            <div className=" m-auto text-center ">
            <div className='about_block text-center '>
                            <h4>We are associated with leading global & local 
manufacturers and suppliers of Iron & Steel <img src='/images/pipe-icon.png'/> 
 products with manufacturing facilities in <img src='/images/insia-map.jpg' /> 
and <img src='images/worldlogo.jpg' />.<br></br></h4>
<span className='ihm-para'>"At IHM we are proud to be associated with a world-class supply network"</span>

            </div>
            {/* <div className='row pipe-images'>
            <div className='col-3'>
            <div className='about-images'>
              <img src='/images/contact-details/pipe.png' />
              <h6>Pipe</h6>
            </div>
            </div>
            <div className='col-3'>
            <div className='about-images'>
              <img src='/images/contact-details/valve.png' />
              <h6>Valve</h6>
            </div>
            </div>
            <div className='col-3'>
            <div className='about-images'>
              <img src='/images/contact-details/screwed.png' />
              <h6>Fitting</h6>
            </div>
            </div>
            <div className='col-3'>
            <div className='about-images'>
              <img src='/images/contact-details/assembly.png' />
              <h6>Machining</h6>
            </div>
            </div>
            </div> */}

{/* <div className='equip-block pt-4'>
            <div className='row'>
                <div className='col-md-3 col-3'>
                    <div onClick={() =>openMenu(1) } class={id==1 && open?"kam-box kam-img-box img-hvr-content-style-1 e-active":"kam-box kam-img-box img-hvr-content-style-1"}>
                        <div class="kam-media kam-img-overlay2 kam-img-effect zoom ">
                            <img className='image-with-shadow' src='/images/mid-folder/pipes.png' alt='' />
                            <div class="kam-info-has p-a20">
                                <div class="kam-info-has-text ">Pipes</div>
                                <DownOutlined />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-3 col-3'>
                    <div onClick={() =>openMenu(2) } class={id==2 && open?"kam-box kam-img-box img-hvr-content-style-1 e-active":"kam-box kam-img-box img-hvr-content-style-1"}>
                        <div class="kam-media kam-img-overlay2 kam-img-effect zoom ">
                            <img className='image-with-shadow' src='/images/mid-folder/valve.jpg' alt='' />
                            <div class="kam-info-has p-a20">
                                <div class="kam-info-has-text">Valves</div>
                                <DownOutlined />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-3 col-3'>
                    <div onClick={() =>openMenu(3) } class={id==3 && open?"kam-box kam-img-box img-hvr-content-style-1 e-active":"kam-box kam-img-box img-hvr-content-style-1"}>
                        <div class="kam-media kam-img-overlay2 kam-img-effect zoom ">
                            <img className='image-with-shadow' src='/images/mid-folder/fitting.jpg' alt='' />
                            <div class="kam-info-has p-a20">
                                <div class="kam-info-has-text">Fittings</div>
                                <DownOutlined />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-3 col-3'>
                    <div onClick={() =>openMenu(2) } class={id==2 && open?"kam-box kam-img-box img-hvr-content-style-1 e-active":"kam-box kam-img-box img-hvr-content-style-1"}>
                        <div class="kam-media kam-img-overlay2 kam-img-effect zoom ">
                            <img className='image-with-shadow' src='/images/mid-folder/machining.jpg' alt='' />
                            <div class="kam-info-has p-a20">
                                <div class="kam-info-has-text ">Steel</div>
                                <DownOutlined />
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
            </div> */}


<div className='equip-block pt-4'>
{products.map((product, index) => (
    <div className='row'>            
    {product.subMenu && product.subMenu.map((subMenuItem, subIndex) => (
            <div key={index} className='pad-class col-md-3 col-3'>
                    <div key={subIndex} onClick={() => openMenu(subMenuItem.subMenuId)} className={id == subMenuItem.subMenuId && open ? "kam-box kam-img-box img-hvr-content-style-1 e-active" : "kam-box kam-img-box img-hvr-content-style-1"}>
                        <div class="kam-media kam-img-overlay2 kam-img-effect zoom" onClick={() => handleClick(product.routeName,subMenuItem.subRouteName, product.menuId, subMenuItem.subMenuId)}>
                            <img className='image-with-shadow' src={subMenuItem.subImage} alt='' />
                            <div class="kam-info-has p-a20">
                                <div class="kam-info-has-text ">{subMenuItem.subMenuName}</div>
                                <DownOutlined />
                            </div>
                        </div>
                    </div>
                
            </div>
            ))}
    </div>
    ))}
</div>

            </div>
</header>
</div>
  )
}

export default ContactDetailsComponent