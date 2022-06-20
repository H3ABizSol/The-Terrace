import React from 'react'
import signatureDishImg from '../../image/signatureDishImg.png'

const SignatureDish = () => {
  return (
    <div className="signatureDish">
        <div className="left">
            <img src={signatureDishImg} alt="signatureDishImg" />
        </div>
        <div className="right">
            <div className="title">Our Signature Dish</div>
            <div className="details">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elit ut aliquam purus sit amet luctus venenatis lectus magna. Vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor. Platea dictumst quisque sagittis purus. Nam libero justo laoreet sit amet cursus sit amet. Imperdiet massa tincidunt nunc pulvinar sapien et ligula. Tincidunt tortor aliquam nulla facilisi cras fermentum odio eu. Sodales neque sodales ut etiam sit amet nisl purus in. At elementum eu facilisis sed odio. A pellentesque sit amet porttitor. Tristique nulla aliquet enim tortor at auctor urna. Convallis a cras semper auctor neque. Tellus id interdum velit laoreet id. Enim nec dui nunc mattis enim ut tellus elementum sagittis.</div>
            <div className="name">- Tincindiet massa</div>
        </div>
    </div>
  )
}

export default SignatureDish