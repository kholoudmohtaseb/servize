import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import './Footer.css';

import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const Footer = () => {
    return (
        <div>
            <hr className="hr-or" />
            <span className="span-or">or</span>
            <hr className="hr-or" />
            <hr className="hr-or" />
            <footer className="nb-footer">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="about">
                                <img src="images/logo.png" className="img-responsive center-block" alt="" />
                                <p>SERVIZ is an online platform for booking home repair and maintenance services Customers can schedule services from pre-screened local technicians on-demand using the company website .</p>

                                <div className="social-media">
                                    <ul className="list-inline">
                                        <li>
                                            <a href="https://www.facebook.com/"><FacebookIcon stroke-width={1} /></a>
                                        </li>
                                        <li>
                                            <a href="https://www.instagram.com/"><InstagramIcon stroke-width={1} /></a>
                                        </li>
                                        <li>
                                            <a href="https://www.twitter.com/"><TwitterIcon stroke-width={1} /></a>
                                        </li>
                                        <li>
                                            <a href="https://www.linkedin.com/"><LinkedInIcon stroke-width={1} /></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3 col-sm-6">
                            <div className="footer-info-single">
                                <h2 className="title">Help Center</h2>
                                <ul className="list-unstyled">
                                    <li><a href="http://www.nextbootstrap.com/" title=""><i className="fa fa-angle-double-right"></i> How to Use</a></li>
                                    <li><a href="http://www.nextbootstrap.com/" title=""><i className="fa fa-angle-double-right"></i> Contact Info.</a></li>
                                    <li><a href="http://www.nextbootstrap.com/" title=""><i className="fa fa-angle-double-right"></i> Sitemap</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-md-3 col-sm-6">
                            <div className="footer-info-single">
                                <h2 className="title">Customer information</h2>
                                <ul className="list-unstyled">
                                    <li><a href="http://www.nextbootstrap.com/" title=""><i className="fa fa-angle-double-right"></i> About Us</a></li>
                                    <li><a href="http://www.nextbootstrap.com/" title=""><i className="fa fa-angle-double-right"></i> Our servics</a></li>
                                    <li><a href="http://www.nextbootstrap.com/" title=""><i className="fa fa-angle-double-right"></i> Contact Us</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-md-3 col-sm-6">
                            <div className="footer-info-single">
                                <h2 className="title">Security & privacy</h2>
                                <ul className="list-unstyled">
                                    <li><a href="http://www.nextbootstrap.com/" title=""><i className="fa fa-angle-double-right"></i> Terms Of Use</a></li>
                                    <li><a href="http://www.nextbootstrap.com/" title=""><i className="fa fa-angle-double-right"></i> Privacy Policy</a></li>
                                    <li><a href="http://www.nextbootstrap.com/" title=""><i className="fa fa-angle-double-right"></i> Return / Refund Policy</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-md-3 col-sm-6">
                            <div className="footer-info-single">
                                <h2 className="title">Developers</h2>
                                <ul className="list-unstyled">
                                    <li><a href="http://www.nextbootstrap.com/" title=""><i className="fa fa-angle-double-right"></i> Kholod</a></li>
                                    <li><a href="http://www.nextbootstrap.com/" title=""><i className="fa fa-angle-double-right"></i> Najwan</a></li>
                                    <li><a href="http://www.nextbootstrap.com/" title=""><i className="fa fa-angle-double-right"></i> Rami</a></li>
                                    <li><a href="http://www.nextbootstrap.com/" title=""><i className="fa fa-angle-double-right"></i> Yaser</a></li>
                                </ul>

                            </div>
                        </div>
                    </div>
                </div>

                <section className="copyright">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-6">
                                <p>Copyright © 2020. SERVIZ.</p>
                            </div>
                            <div className="col-sm-6"></div>
                        </div>
                    </div>
                </section>
            </footer>
        </div>

    )
}

export default Footer;

