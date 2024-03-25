import React from 'react';
import { Montserrat } from "next/font/google";

const font = Montserrat({ weight: '500', subsets: ['latin'] });

export const Terms = () => {
  return (
    
    <div className="items-center" style={styles.container}>
    <p> <br/><br/>
    <>
    <strong>Term of Service</strong><br/><br/>
  These Term of Service (&quot;Terms&quot;) govern your access to and use of the services, including any Cogify software,
  applications, websites, products, and related services (collectively, the &quot;Services&quot;), provided by Cogify, Inc.
  (&quot;Cogify&quot;).<br/><br/>

  Please read these Terms carefully before using the Services. By accessing or using the Services, you agree to be
  bound by these Terms. If you do not agree to all of these Terms, do not access or use the Services.
  <br/><br/>
<strong>Basic Terms</strong><br/><br/>

  You are responsible for your use of the Services and for any content you provide, including compliance with
  applicable laws, rules, and regulations. You should only provide content that you are comfortable sharing with
  others.<br/><br/>


  You must provide accurate and complete information when you register for an account and keep your account
  information updated. You are solely responsible for maintaining the confidentiality of your account credentials
  and for any activities that occur under your account.<br/><br/>

<strong>Privacy</strong><br/><br/>

  Your privacy is important to us. Our Privacy Policy explains how we collect, use, and disclose information about
  you when you access or use the Services. By accessing or using the Services, you consent to the collection, use,
  and disclosure of your information as described in our Privacy Policy.<br/><br/>
<strong>Content</strong><br/><br/>
  You retain ownership of the content you provide to the Services. By providing content to the Services, you grant
  Cogify a worldwide, non-exclusive, royalty-free, sublicensable, and transferable license to use, reproduce,
  distribute, prepare derivative works of, display, and perform the content in connection with the Services and
  Cogify&apos;s business, including for promoting and redistributing part or all of the Services in any media formats and
  through any media channels.<br/><br/>


  You are solely responsible for the content you provide and any consequences of sharing or publishing it.
  <br/><br/>
<strong>Modifications</strong><br/><br/>

  Cogify reserves the right to modify or discontinue, temporarily or permanently, the Services or any features or
  functionality thereof without prior notice. Cogify will not be liable to you or any third party for any
  modification, suspension, or discontinuance of the Services.
  <br/><br/>
<strong>Termination</strong><br/><br/>

  Cogify may terminate or suspend your access to the Services at any time, with or without cause, and with or
  without notice. Upon termination, your right to access or use the Services will immediately cease.
  <br/><br/>
<strong>Disclaimer</strong><br/><br/>
  THE SERVICES ARE PROVIDED &quot;AS IS,&quot; WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESS OR IMPLIED. Cogify DISCLAIMS ALL
  WARRANTIES, INCLUDING BUT NOT LIMITED TO MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
  <br/><br/>
<strong>Limitation of Liability</strong><br/><br/>
<strong>
  IN NO EVENT SHALL Cogify BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES,
  INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA, USE, OR OTHER INTANGIBLE LOSSES, ARISING OUT OF OR IN
  CONNECTION WITH YOUR ACCESS TO OR USE OF THE SERVICES.
  <br/><br/>
  </strong>
<strong>Governing Law</strong><br/><br/>

  These Terms are governed by and construed in accordance with the laws of the State of Delaware, without regard to
  its conflict of law provisions.
  <br/><br/>
<strong>Changes</strong><br/><br/>

  Cogify reserves the right, at its sole discretion, to modify or replace these Terms at any time. If a revision is
  material, we will provide at least 30 days&apos; notice prior to any new terms taking effect. What constitutes a
  material change will be determined at our sole discretion.
  <br/><br/>
<strong>Contact Us</strong><br/><br/>

  If you have any questions about these Terms, please contact us at <a style={{fontWeight: 'bold' }} href="mailto:help@cogify.social?subject=I%20need%20help%20related%20to.">help@cogify.social</a> 

  <br/><br/>

</>


</p>
  </div>

  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0 auto', // Auto margins for left and right
    maxWidth: '800px', // Adjust as needed
  },
  paragraph: {
    fontFamily: font,
    textAlign: 'center',
    fontSize: '16px',
    marginBottom: '10px',
  },
};

export default Terms;

