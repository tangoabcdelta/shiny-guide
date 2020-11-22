/*!

=========================================================
* Argon Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import { Button, Card, Container, Row, Col } from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import SimpleFooter from "components/Footers/SimpleFooter.js";

class Profile2 extends React.Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <DemoNavbar />
        <main className="profile-page" ref="main">
          <section className="section-profile-cover section-shaped my-0">
            {/* Circles background */}
            <div className="shape shape-style-1 shape-default alpha-4">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
            {/* SVG separator */}
            <div className="separator separator-bottom separator-skew">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="fill-white"
                  points="2560 0 2560 100 0 100"
                />
              </svg>
            </div>
          </section>
          <section className="section">
            <Container>
              <div class=" mx-sm-2  row">
                <div class="text-center p-0 m-0 col-lg-2 col-sm-4 col">
                  <img
                    src="https://pathfinder-demo.edgenetworks.ai/platform-demo/c7666ccfcb7045ad8a12c5b09a2300ca_pic.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=wiprohirealchemy%2F20201121%2Fus-east-1%2Fs3%2Faws4_request&amp;X-Amz-Date=20201121T122635Z&amp;X-Amz-Expires=300&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Signature=0c55d24051543219f269fd577f2da739b3c1a82061eb59c1217dde5260bb9773"
                    alt="Profile Picture"
                    class="MiniProfile_mini_image__3wKC1 rounded-circle mt-1 card-img-top"
                  />
                  <span class="MiniProfile_mini_link__29t7_ text-xs font-weight-400 text-gray px-2 mt-1">
                    <div>
                      <label
                        for="file-input"
                        class=" pointer text-xs font-weight-400 custom_card py-1 mb-0"
                      >
                        Upload new photo
                        <input
                          id="file-input"
                          type="file"
                          accept=".png,.jpg,.jpeg,.gif"
                          hidden=""
                        />
                      </label>
                    </div>
                  </span>
                </div>
                <div class="d-block mt-1 text-truncate col">
                  <div class="  ">
                    <div class="font-weight-700 mb-2 text-primary text-sm row">
                      Tejas Chandra
                    </div>
                    <div class="text-sm font-weight-400 mb-2  text-light-black d-flex justify-content-start align-items-center row">
                      <div class=" text-default col-1 p-0 col">
                        <ion-icon
                          name="briefcase-outline"
                          style="padding-top: 5px;"
                          role="img"
                          class="md hydrated"
                          aria-label="briefcase outline"
                        ></ion-icon>
                      </div>
                      <div class="d-block p-0 text-truncate col">
                        Solution Consultant I - Software Testing
                      </div>
                    </div>
                    <div class="text-sm font-weight-400 mb-2 text-light-black  row">
                      <div class="text-default col-1 p-0 col">
                        <ion-icon
                          name="location-outline"
                          style="padding-top: 0px;"
                          role="img"
                          class="md hydrated"
                          aria-label="location outline"
                        ></ion-icon>
                      </div>
                      <div class="d-block p-0 text-truncate col">
                        Mumbai, Maharashtra
                      </div>
                    </div>
                    <div class="text-sm font-weight-400 text-light-black row">
                      <div class=" col-1 p-0 col">
                        <ion-icon
                          src="/static/media/grade-outline.751622b1.svg"
                          style="zoom: 1; padding-top: 2px;"
                          role="img"
                          class="md hydrated"
                        ></ion-icon>
                      </div>
                      <div class="d-block p-0 text-truncate col">B2</div>
                    </div>
                  </div>
                </div>
                <div class="col-md-12 col-lg-6 col-xl-6 ml-2 col-sm-12 col">
                  <div class="">
                    <div class="d-block text-right">
                      <span class="MiniProfile_icon_item__Dq_TG pointer text-xs">
                        <ion-icon
                          name="/static/media/linkedin.ea08c1e8.svg"
                          src="/static/media/linkedin.ea08c1e8.svg"
                          role="img"
                          class="md hydrated"
                        ></ion-icon>
                      </span>
                      <span class="MiniProfile_icon_item__Dq_TG pointer text-xs">
                        <ion-icon
                          name="/static/media/twitter.e0aeebbf.svg"
                          src="/static/media/twitter.e0aeebbf.svg"
                          role="img"
                          class="md hydrated"
                        ></ion-icon>
                      </span>
                      <span class="MiniProfile_icon_item__Dq_TG pointer text-xs">
                        <ion-icon
                          name="/static/media/github.96cbc6a4.svg"
                          src="/static/media/github.96cbc6a4.svg"
                          role="img"
                          class="md hydrated"
                        ></ion-icon>
                      </span>
                      <span class="MiniProfile_icon_item__Dq_TG pointer text-xs">
                        <ion-icon
                          name="/static/media/stack.4f0355a4.svg"
                          src="/static/media/stack.4f0355a4.svg"
                          role="img"
                          class="md hydrated"
                        ></ion-icon>
                      </span>
                    </div>
                    <div class="mt-lg-3 mt-xl-3 mt-sm-2">
                      <div class="">
                        <div class="ResumeUpload_resume_upload__3IpvK d-flex align-items-center card-border mr-1 mt-2 p-3 row">
                          <div class="p-0 col-md-7 col-lg-6 col-xl-5 col-sm-6 col">
                            <div class="  p-0 m-0 row">
                              <div class="p-0 col">
                                <span class="ResumeUpload_resume_name__9MX2k d-block text-truncate  text-sm text-light-black font-weight-400 m-0">
                                  EN1022.doc
                                </span>
                              </div>
                            </div>
                            <div class="row">
                              <p class="ResumeUpload_resume_details__RlSO_ pl-3 m-0 text-light-black text-xs">
                                18 Nov, 2020
                              </p>
                            </div>
                          </div>
                          <div class="col-md-1 col-lg-3 col-xl-3 col-sm-3 pl-3 pr-2   col">
                            <div>
                              <button class="hvr_icon  text-dark btn bg-transparent  m-1 p-0">
                                <ion-icon
                                  name="cloud-download-outline"
                                  style="zoom: 1.2;"
                                  role="img"
                                  class="md hydrated"
                                  aria-label="cloud download outline"
                                ></ion-icon>
                              </button>
                            </div>
                          </div>
                          <div class="col-md-4 col-lg-3 col-xl-4 col-sm-3 p-0 col">
                            <button
                              type="button"
                              class="btn  btn-default float-right px-2 btn btn-"
                            >
                              {" "}
                              Update Resume{" "}
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <span> </span>
                  </div>
                </div>
              </div>
            </Container>
            <hr></hr>
            <Container>
              <Card className="card-profile shadow mt--300">
                <div className="px-4">
                  <Row className="justify-content-center">
                    <Col className="order-lg-2" lg="3">
                      <div className="card-profile-image">
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          <img
                            alt="..."
                            className="rounded-circle"
                            src={require("assets/img/theme/team-4-800x800.jpg")}
                          />
                        </a>
                      </div>
                    </Col>
                    <Col
                      className="order-lg-3 text-lg-right align-self-lg-center"
                      lg="4"
                    >
                      <div className="card-profile-actions py-4 mt-lg-0">
                        <Button
                          className="mr-4"
                          color="info"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                          size="sm"
                        >
                          Connect
                        </Button>
                        <Button
                          className="float-right"
                          color="default"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                          size="sm"
                        >
                          Message
                        </Button>
                      </div>
                    </Col>
                    <Col className="order-lg-1" lg="4">
                      <div className="card-profile-stats d-flex justify-content-center">
                        <div>
                          <span className="heading">22</span>
                          <span className="description">Friends</span>
                        </div>
                        <div>
                          <span className="heading">10</span>
                          <span className="description">Photos</span>
                        </div>
                        <div>
                          <span className="heading">89</span>
                          <span className="description">Comments</span>
                        </div>
                      </div>
                    </Col>
                  </Row>
                  <div className="text-center mt-5">
                    <h3>
                      Jessica Jones{" "}
                      <span className="font-weight-light">, 27</span>
                    </h3>
                    <div className="h6 font-weight-300">
                      <i className="ni location_pin mr-2" />
                      Bucharest, Romania
                    </div>
                    <div className="h6 mt-4">
                      <i className="ni business_briefcase-24 mr-2" />
                      Solution Manager - Creative Tim Officer
                    </div>
                    <div>
                      <i className="ni education_hat mr-2" />
                      University of Computer Science
                    </div>
                  </div>
                  <div className="mt-5 py-5 border-top text-center">
                    <Row className="justify-content-center">
                      <Col lg="9">
                        <p>
                          An artist of considerable range, Ryan — the name taken
                          by Melbourne-raised, Brooklyn-based Nick Murphy —
                          writes, performs and records all of his own music,
                          giving it a warm, intimate feel with a solid groove
                          structure. An artist of considerable range.
                        </p>
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          Show more
                        </a>
                      </Col>
                    </Row>
                  </div>
                </div>
              </Card>
            </Container>
          </section>
        </main>
        <SimpleFooter />
      </>
    );
  }
}

export default Profile2;
