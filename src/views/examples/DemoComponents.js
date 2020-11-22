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
import { Container, Row } from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import CardsFooter from "components/Footers/CardsFooter.js";

// index page sections
import CustomControls from "views/IndexSections/CustomControls";
import Menus from "views/IndexSections/Menus";
import Navbars from "views/IndexSections/Navbars.js";
import Carousel from "views/IndexSections/Carousel.js";
import Icons from "views/IndexSections/Icons.js";
import Login from "views/IndexSections/Login.js";
import Download from "views/IndexSections/Download.js";
// import Download from "src/views/IndexSections/Download.js";

class Index extends React.Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <DemoNavbar />
        <main ref="main">
          <section className="section">
            <Container>
              <CustomControls />
              <Menus />
            </Container>
          </section>
          <Navbars />
          <section className="section section-components">
            <Container>
              <section class="section section-components">
                <div class="container">
                  <h3 class="h4 text-success font-weight-bold mb-4">Tabs</h3>
                  <div class="justify-content-center row">
                    <div class="col-lg-6">
                      <div class="mb-3">
                        <small class="text-uppercase font-weight-bold">
                          With icons
                        </small>
                      </div>
                      <div class="nav-wrapper">
                        <ul
                          id="tabs-icons-text"
                          role="tablist"
                          class="nav-fill flex-column flex-md-row nav nav-pills"
                        >
                          <li class="nav-item">
                            <a
                              aria-selected="true"
                              href="#pablo"
                              role="tab"
                              class="mb-sm-3 mb-md-0 active nav-link"
                            >
                              <i class="ni ni-cloud-upload-96 mr-2"></i>Home
                            </a>
                          </li>
                          <li class="nav-item">
                            <a
                              aria-selected="false"
                              href="#pablo"
                              role="tab"
                              class="mb-sm-3 mb-md-0 nav-link"
                            >
                              <i class="ni ni-bell-55 mr-2"></i>Profile
                            </a>
                          </li>
                          <li class="nav-item">
                            <a
                              aria-selected="false"
                              href="#pablo"
                              role="tab"
                              class="mb-sm-3 mb-md-0 nav-link"
                            >
                              <i class="ni ni-calendar-grid-58 mr-2"></i>
                              Messages
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div class="shadow card">
                        <div class="card-body">
                          <div class="tab-content">
                            <div class="tab-pane active">
                              <p class="description">
                                Raw denim you probably haven't heard of them
                                jean shorts Austin. Nesciunt tofu stumptown
                                aliqua, retro synth master cleanse. Mustache
                                cliche tempor, williamsburg carles vegan
                                helvetica. Reprehenderit butcher retro keffiyeh
                                dreamcatcher synth.
                              </p>
                              <p class="description">
                                Raw denim you probably haven't heard of them
                                jean shorts Austin. Nesciunt tofu stumptown
                                aliqua, retro synth master cleanse.
                              </p>
                            </div>
                            <div class="tab-pane">
                              <p class="description">
                                Cosby sweater eu banh mi, qui irure terry
                                richardson ex squid. Aliquip placeat salvia
                                cillum iphone. Seitan aliquip quis cardigan
                                american apparel, butcher voluptate nisi qui.
                              </p>
                            </div>
                            <div class="tab-pane">
                              <p class="description">
                                Raw denim you probably haven't heard of them
                                jean shorts Austin. Nesciunt tofu stumptown
                                aliqua, retro synth master cleanse. Mustache
                                cliche tempor, williamsburg carles vegan
                                helvetica. Reprehenderit butcher retro keffiyeh
                                dreamcatcher synth.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="mt-5 mt-lg-0 col-lg-6">
                      <div class="mb-3">
                        <small class="text-uppercase font-weight-bold">
                          With text
                        </small>
                      </div>
                      <div class="nav-wrapper">
                        <ul
                          id="tabs-icons-text"
                          role="tablist"
                          class="nav-fill flex-column flex-md-row nav nav-pills"
                        >
                          <li class="nav-item">
                            <a
                              aria-selected="true"
                              href="#pablo"
                              role="tab"
                              class="mb-sm-3 mb-md-0 active nav-link"
                            >
                              Home
                            </a>
                          </li>
                          <li class="nav-item">
                            <a
                              aria-selected="false"
                              href="#pablo"
                              role="tab"
                              class="mb-sm-3 mb-md-0 nav-link"
                            >
                              Profile
                            </a>
                          </li>
                          <li class="nav-item">
                            <a
                              aria-selected="false"
                              href="#pablo"
                              role="tab"
                              class="mb-sm-3 mb-md-0 nav-link"
                            >
                              Messages
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div class="shadow card">
                        <div class="card-body">
                          <div class="tab-content">
                            <div class="tab-pane active">
                              <p class="description">
                                Raw denim you probably haven't heard of them
                                jean shorts Austin. Nesciunt tofu stumptown
                                aliqua, retro synth master cleanse. Mustache
                                cliche tempor, williamsburg carles vegan
                                helvetica. Reprehenderit butcher retro keffiyeh
                                dreamcatcher synth.
                              </p>
                              <p class="description">
                                Raw denim you probably haven't heard of them
                                jean shorts Austin. Nesciunt tofu stumptown
                                aliqua, retro synth master cleanse.
                              </p>
                            </div>
                            <div class="tab-pane">
                              <p class="description">
                                Cosby sweater eu banh mi, qui irure terry
                                richardson ex squid. Aliquip placeat salvia
                                cillum iphone. Seitan aliquip quis cardigan
                                american apparel, butcher voluptate nisi qui.
                              </p>
                            </div>
                            <div class="tab-pane">
                              <p class="description">
                                Raw denim you probably haven't heard of them
                                jean shorts Austin. Nesciunt tofu stumptown
                                aliqua, retro synth master cleanse. Mustache
                                cliche tempor, williamsburg carles vegan
                                helvetica. Reprehenderit butcher retro keffiyeh
                                dreamcatcher synth.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row-grid justify-content-between align-items-center mt-lg row">
                    <div class="col-lg-5">
                      <h3 class="h4 text-success font-weight-bold mb-4">
                        Progress bars
                      </h3>
                      <div class="progress-wrapper">
                        <div class="progress-info">
                          <div class="progress-label">
                            <span>Task completed</span>
                          </div>
                          <div class="progress-percentage">
                            <span>40%</span>
                          </div>
                        </div>
                        <div class="progress">
                          <div
                            class="progress-bar bg-default"
                            role="progressbar"
                            aria-valuenow="25"
                            aria-valuemin="0"
                            aria-valuemax="100"
                            style="width: 25%;"
                          ></div>
                        </div>
                      </div>
                      <div class="progress-wrapper">
                        <div class="progress-info">
                          <div class="progress-label">
                            <span>Task completed</span>
                          </div>
                          <div class="progress-percentage">
                            <span>60%</span>
                          </div>
                        </div>
                        <div class="progress">
                          <div
                            class="progress-bar"
                            role="progressbar"
                            aria-valuenow="60"
                            aria-valuemin="0"
                            aria-valuemax="100"
                            style="width: 60%;"
                          ></div>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-5">
                      <h3 class="h4 text-success font-weight-bold mb-5">
                        Pagination
                      </h3>
                      <nav aria-label="Page navigation example" class="mb-4">
                        <nav class="" aria-label="pagination">
                          <ul class="pagination">
                            <li class="page-item">
                              <a href="#pablo" class="page-link">
                                1
                              </a>
                            </li>
                            <li class="active page-item">
                              <a href="#pablo" class="page-link">
                                2
                              </a>
                            </li>
                            <li class="page-item">
                              <a href="#pablo" class="page-link">
                                3
                              </a>
                            </li>
                            <li class="page-item">
                              <a href="#pablo" class="page-link">
                                4
                              </a>
                            </li>
                            <li class="page-item">
                              <a href="#pablo" class="page-link">
                                5
                              </a>
                            </li>
                          </ul>
                        </nav>
                      </nav>
                      <nav aria-label="Page navigation example">
                        <nav class="" aria-label="pagination">
                          <ul class="pagination">
                            <li class="page-item">
                              <a href="#pablo" class="page-link">
                                <i class="fa fa-angle-left"></i>
                              </a>
                            </li>
                            <li class="page-item">
                              <a href="#pablo" class="page-link">
                                1
                              </a>
                            </li>
                            <li class="active page-item">
                              <a href="#pablo" class="page-link">
                                2
                              </a>
                            </li>
                            <li class="page-item">
                              <a href="#pablo" class="page-link">
                                3
                              </a>
                            </li>
                            <li class="page-item">
                              <a href="#pablo" class="page-link">
                                4
                              </a>
                            </li>
                            <li class="page-item">
                              <a href="#pablo" class="page-link">
                                5
                              </a>
                            </li>
                            <li class="page-item">
                              <a href="#pablo" class="page-link">
                                <i class="fa fa-angle-right"></i>
                              </a>
                            </li>
                          </ul>
                        </nav>
                      </nav>
                    </div>
                  </div>
                  <div class="row-grid justify-content-between row">
                    <div class="col-lg-5">
                      <h3 class="h4 text-success font-weight-bold mb-5">
                        Navigation Pills
                      </h3>
                      <ul
                        id="tabs_2"
                        role="tablist"
                        class="nav-pills-circle nav nav-pills"
                      >
                        <li class="nav-item">
                          <a
                            aria-selected="true"
                            href="#pablo"
                            role="tab"
                            class="rounded-circle active nav-link"
                          >
                            <span class="nav-link-icon d-block">
                              <i class="ni ni-atom"></i>
                            </span>
                          </a>
                        </li>
                        <li class="nav-item">
                          <a
                            aria-selected="false"
                            href="#pablo"
                            role="tab"
                            class="rounded-circle nav-link"
                          >
                            <span class="nav-link-icon d-block">
                              <i class="ni ni-chat-round"></i>
                            </span>
                          </a>
                        </li>
                        <li class="nav-item">
                          <a
                            aria-selected="false"
                            href="#pablo"
                            role="tab"
                            class="rounded-circle nav-link"
                          >
                            <span class="nav-link-icon d-block">
                              <i class="ni ni-cloud-download-95"></i>
                            </span>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div class="col-lg-5">
                      <h3 class="h4 text-success font-weight-bold mb-5">
                        Labels
                      </h3>
                      <span class="text-uppercase badge badge-primary badge-pill">
                        Primary
                      </span>
                      <span class="text-uppercase badge badge-success badge-pill">
                        Success
                      </span>
                      <span class="text-uppercase badge badge-danger badge-pill">
                        Danger
                      </span>
                      <span class="text-uppercase badge badge-warning badge-pill">
                        Warning
                      </span>
                      <span class="text-uppercase badge badge-info badge-pill">
                        Info
                      </span>
                    </div>
                  </div>
                  <h3 class="mt-lg mb-4">
                    <span>Alerts</span>
                  </h3>
                  <div
                    class="alert alert-success alert-dismissible show"
                    role="alert"
                  >
                    <button type="button" class="close" aria-label="Close">
                      <span aria-hidden="true">×</span>
                    </button>
                    <span class="alert-inner--icon">
                      <i class="ni ni-like-2"></i>
                    </span>
                    <span class="alert-inner--text ml-1">
                      <strong>Success!</strong> This is a success alert—check it
                      out!
                    </span>
                  </div>
                  <div
                    class="alert alert-info alert-dismissible show"
                    role="alert"
                  >
                    <button type="button" class="close" aria-label="Close">
                      <span aria-hidden="true">×</span>
                    </button>
                    <span class="alert-inner--icon">
                      <i class="ni ni-bell-55"></i>
                    </span>
                    <span class="alert-inner--text ml-1">
                      <strong>Info!</strong> This is an info alert—check it out!
                    </span>
                  </div>
                  <div
                    class="alert alert-warning alert-dismissible show"
                    role="alert"
                  >
                    <button type="button" class="close" aria-label="Close">
                      <span aria-hidden="true">×</span>
                    </button>
                    <span class="alert-inner--icon">
                      <i class="ni ni-bell-55"></i>
                    </span>
                    <span class="alert-inner--text ml-1">
                      <strong>Warning!</strong> This is a warning alert—check it
                      out!
                    </span>
                  </div>
                  <div
                    class="alert alert-danger alert-dismissible show"
                    role="alert"
                  >
                    <button type="button" class="close" aria-label="Close">
                      <span aria-hidden="true">×</span>
                    </button>
                    <span class="alert-inner--icon">
                      <i class="ni ni-support-16"></i>
                    </span>
                    <span class="alert-inner--text ml-1">
                      <strong>Danger!</strong> This is an error alert—check it
                      out!
                    </span>
                  </div>
                  <h2 class="mt-lg mb-5">
                    <span>Typography</span>
                  </h2>
                  <h3 class="h4 text-success font-weight-bold">Headings</h3>
                  <div class="py-3 align-items-center row">
                    <div class="col-sm-3">
                      <small class="text-uppercase text-muted font-weight-bold">
                        Heading 1
                      </small>
                    </div>
                    <div class="col-sm-9">
                      <h1 class="mb-0">Argon Design System</h1>
                    </div>
                  </div>
                  <div class="py-3 align-items-center row">
                    <div class="col-sm-3">
                      <small class="text-uppercase text-muted font-weight-bold">
                        Heading 2
                      </small>
                    </div>
                    <div class="col-sm-9">
                      <h2 class="mb-0">Argon Design System</h2>
                    </div>
                  </div>
                  <div class="py-3 align-items-center row">
                    <div class="col-sm-3">
                      <small class="text-uppercase text-muted font-weight-bold">
                        Heading 3
                      </small>
                    </div>
                    <div class="col-sm-9">
                      <h3 class="mb-0">Argon Design System</h3>
                    </div>
                  </div>
                  <div class="py-3 align-items-center row">
                    <div class="col-sm-3">
                      <small class="text-uppercase text-muted font-weight-bold">
                        Heading 4
                      </small>
                    </div>
                    <div class="col-sm-9">
                      <h4 class="mb-0">Argon Design System</h4>
                    </div>
                  </div>
                  <div class="py-3 align-items-center row">
                    <div class="col-sm-3">
                      <small class="text-uppercase text-muted font-weight-bold">
                        Heading 5
                      </small>
                    </div>
                    <div class="col-sm-9">
                      <h5 class="mb-0">Argon Design System</h5>
                    </div>
                  </div>
                  <div class="py-3 align-items-center row">
                    <div class="col-sm-3">
                      <small class="text-uppercase text-muted font-weight-bold">
                        Heading 6
                      </small>
                    </div>
                    <div class="col-sm-9">
                      <h6 class="mb-0">Argon Design System</h6>
                    </div>
                  </div>
                  <h3 class="h4 text-success font-weight-bold mt-md">
                    Display titles
                  </h3>
                  <div class="py-3 align-items-center row">
                    <div class="col-sm-3">
                      <small class="text-uppercase text-muted font-weight-bold">
                        Display 1
                      </small>
                    </div>
                    <div class="col-sm-9">
                      <h1 class="display-1 mb-0">Argon Design System</h1>
                    </div>
                  </div>
                  <div class="py-3 align-items-center row">
                    <div class="col-sm-3">
                      <small class="text-uppercase text-muted font-weight-bold">
                        Display 2
                      </small>
                    </div>
                    <div class="col-sm-9">
                      <h2 class="display-2 mb-0">Argon Design System</h2>
                    </div>
                  </div>
                  <div class="py-3 align-items-center row">
                    <div class="col-sm-3">
                      <small class="text-uppercase text-muted font-weight-bold">
                        Display 3
                      </small>
                    </div>
                    <div class="col-sm-9">
                      <h3 class="display-3 mb-0">Argon Design System</h3>
                    </div>
                  </div>
                  <div class="py-3 align-items-center row">
                    <div class="col-sm-3">
                      <small class="text-uppercase text-muted font-weight-bold">
                        Display 4
                      </small>
                    </div>
                    <div class="col-sm-9">
                      <h4 class="display-4 mb-0">Argon Design System</h4>
                    </div>
                  </div>
                  <h3 class="h4 text-success font-weight-bold mt-md">
                    Specialized titles
                  </h3>
                  <div class="py-3 align-items-center row">
                    <div class="col-sm-3">
                      <small class="text-uppercase text-muted font-weight-bold">
                        Heading
                      </small>
                    </div>
                    <div class="col-sm-9">
                      <h3 class="heading mb-0">Argon Design System</h3>
                    </div>
                  </div>
                  <div class="py-3 align-items-center row">
                    <div class="col-sm-3">
                      <small class="text-uppercase text-muted font-weight-bold">
                        Heading title
                      </small>
                    </div>
                    <div class="col-sm-9">
                      <h3 class="heading-title text-warning mb-0">
                        Argon Design System
                      </h3>
                    </div>
                  </div>
                  <div class="py-3 align-items-center row">
                    <div class="col-sm-3">
                      <small class="text-uppercase text-muted font-weight-bold">
                        Heading seaction
                      </small>
                    </div>
                    <div class="col-sm-9">
                      <div>
                        <h2 class="display-3">Header with small subtitle</h2>
                        <p class="lead text-muted">
                          According to the National Oceanic and Atmospheric
                          Administration, Ted, Scambos, NSIDClead scentist, puts
                          the potentially record maximum.
                        </p>
                      </div>
                    </div>
                  </div>
                  <h3 class="h4 text-success font-weight-bold mt-md">
                    Paragraphs
                  </h3>
                  <div class="py-3 align-items-center row">
                    <div class="col-sm-3">
                      <small class="text-uppercase text-muted font-weight-bold">
                        Paragraph
                      </small>
                    </div>
                    <div class="col-sm-9">
                      <p>
                        I will be the leader of a company that ends up being
                        worth billions of dollars, because I got the answers. I
                        understand culture. I am the nucleus. I think that’s a
                        responsibility that I have, to push possibilities, to
                        show people, this is the level that things could be at.
                      </p>
                    </div>
                  </div>
                  <div class="py-3 align-items-center row">
                    <div class="col-sm-3">
                      <small class="text-uppercase text-muted font-weight-bold">
                        Lead text
                      </small>
                    </div>
                    <div class="col-sm-9">
                      <p class="lead">
                        I will be the leader of a company that ends up being
                        worth billions of dollars, because I got the answers. I
                        understand culture. I am the nucleus. I think that’s a
                        responsibility that I have, to push possibilities, to
                        show people, this is the level that things could be at.
                      </p>
                    </div>
                  </div>
                  <div class="py-3 align-items-center row">
                    <div class="col-sm-3">
                      <small class="text-uppercase text-muted font-weight-bold">
                        Quote
                      </small>
                    </div>
                    <div class="col-sm-9">
                      <blockquote class="blockquote">
                        <p class="mb-0">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Integer posuere erat a ante.
                        </p>
                        <footer class="blockquote-footer">
                          Someone famous in{" "}
                          <cite title="Source Title">Source Title</cite>
                        </footer>
                      </blockquote>
                    </div>
                  </div>
                  <div class="py-3 align-items-center row">
                    <div class="col-sm-3">
                      <small class="text-uppercase text-muted font-weight-bold">
                        Muted text
                      </small>
                    </div>
                    <div class="col-sm-9">
                      <p class="text-muted mb-0">
                        I will be the leader of a company that ends up being
                        worth billions of dollars, because I got the answers...
                      </p>
                    </div>
                  </div>
                  <div class="py-3 align-items-center row">
                    <div class="col-sm-3">
                      <small class="text-uppercase text-muted font-weight-bold">
                        Primary text
                      </small>
                    </div>
                    <div class="col-sm-9">
                      <p class="text-primary">
                        I will be the leader of a company that ends up being
                        worth billions of dollars, because I got the answers...
                      </p>
                    </div>
                  </div>
                  <div class="py-3 align-items-center row">
                    <div class="col-sm-3">
                      <small class="text-uppercase text-muted font-weight-bold">
                        Info text
                      </small>
                    </div>
                    <div class="col-sm-9">
                      <p class="text-info mb-0">
                        I will be the leader of a company that ends up being
                        worth billions of dollars, because I got the answers...
                      </p>
                    </div>
                  </div>
                  <div class="py-3 align-items-center row">
                    <div class="col-sm-3">
                      <small class="text-uppercase text-muted font-weight-bold">
                        Success text
                      </small>
                    </div>
                    <div class="col-sm-9">
                      <p class="text-success mb-0">
                        I will be the leader of a company that ends up being
                        worth billions of dollars, because I got the answers...
                      </p>
                    </div>
                  </div>
                  <div class="py-3 align-items-center row">
                    <div class="col-sm-3">
                      <small class="text-uppercase text-muted font-weight-bold">
                        Warning text
                      </small>
                    </div>
                    <div class="col-sm-9">
                      <p class="text-warning mb-0">
                        I will be the leader of a company that ends up being
                        worth billions of dollars, because I got the answers...
                      </p>
                    </div>
                  </div>
                  <div class="py-3 align-items-center row">
                    <div class="col-sm-3">
                      <small class="text-uppercase text-muted font-weight-bold">
                        Danger text
                      </small>
                    </div>
                    <div class="col-sm-9">
                      <p class="text-danger mb-0">
                        I will be the leader of a company that ends up being
                        worth billions of dollars, because I got the answers...
                      </p>
                    </div>
                  </div>
                  <h2 class="mt-lg mb-5">
                    <span>Images</span>
                  </h2>
                  <div class="row">
                    <div class="col-6 col-sm-3">
                      <small class="d-block text-uppercase font-weight-bold mb-4">
                        Image
                      </small>
                      <img
                        alt="..."
                        class="img-fluid rounded shadow"
                        src="/argon-design-system-react/static/media/team-1-800x800.53033970.jpg"
                        style="width: 150px;"
                      />
                    </div>
                    <div class="col-6 col-sm-3">
                      <small class="d-block text-uppercase font-weight-bold mb-4">
                        Circle Image
                      </small>
                      <img
                        alt="..."
                        class="img-fluid rounded-circle shadow"
                        src="/argon-design-system-react/static/media/team-2-800x800.dcfcf3b7.jpg"
                        style="width: 150px;"
                      />
                    </div>
                    <div class="mt-5 mt-sm-0 col-6 col-sm-3">
                      <small class="d-block text-uppercase font-weight-bold mb-4">
                        Raised
                      </small>
                      <img
                        alt="..."
                        class="img-fluid rounded shadow-lg"
                        src="/argon-design-system-react/static/media/team-3-800x800.497bb359.jpg"
                        style="width: 150px;"
                      />
                    </div>
                    <div class="mt-5 mt-sm-0 col-6 col-sm-3">
                      <small class="d-block text-uppercase font-weight-bold mb-4">
                        Circle Raised
                      </small>
                      <img
                        alt="..."
                        class="img-fluid rounded-circle shadow-lg"
                        src="/argon-design-system-react/static/media/team-4-800x800.23007132.jpg"
                        style="width: 150px;"
                      />
                    </div>
                  </div>
                  <h2 class="mt-lg mb-5">
                    <span>Javascript Components</span>
                  </h2>
                  <h3 class="h4 text-success font-weight-bold mb-4">Modals</h3>
                  <div class="row">
                    <div class="col-md-4">
                      <button
                        type="button"
                        class="mb-3 btn btn-primary btn-block"
                      >
                        Default
                      </button>
                    </div>
                    <div class="col-md-4">
                      <button
                        type="button"
                        class="mb-3 btn btn-warning btn-block"
                      >
                        Notification
                      </button>
                    </div>
                    <div class="col-md-4">
                      <button type="button" class="btn btn-default btn-block">
                        Form
                      </button>
                    </div>
                  </div>
                  <h3 class="h4 text-success font-weight-bold mt-md mb-4">
                    Datepicker
                  </h3>
                  <div class="row">
                    <div class="col-md-4">
                      <small class="d-block text-uppercase font-weight-bold mb-3">
                        Single date
                      </small>
                      <div class="form-group">
                        <div class="input-group">
                          <div class="input-group-prepend">
                            <span class="input-group-text">
                              <i class="ni ni-calendar-grid-58"></i>
                            </span>
                          </div>
                          <div class="rdt">
                            <input
                              type="text"
                              class="form-control"
                              placeholder="Date Picker Here"
                              value=""
                            />
                            <div class="rdtPicker">
                              <div class="rdtDays">
                                <table>
                                  <thead>
                                    <tr>
                                      <th class="rdtPrev">
                                        <span>‹</span>
                                      </th>
                                      <th
                                        class="rdtSwitch"
                                        colspan="5"
                                        data-value="10"
                                      >
                                        November 2020
                                      </th>
                                      <th class="rdtNext">
                                        <span>›</span>
                                      </th>
                                    </tr>
                                    <tr>
                                      <th class="dow">Su</th>
                                      <th class="dow">Mo</th>
                                      <th class="dow">Tu</th>
                                      <th class="dow">We</th>
                                      <th class="dow">Th</th>
                                      <th class="dow">Fr</th>
                                      <th class="dow">Sa</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td data-value="25" class="rdtDay rdtOld">
                                        25
                                      </td>
                                      <td data-value="26" class="rdtDay rdtOld">
                                        26
                                      </td>
                                      <td data-value="27" class="rdtDay rdtOld">
                                        27
                                      </td>
                                      <td data-value="28" class="rdtDay rdtOld">
                                        28
                                      </td>
                                      <td data-value="29" class="rdtDay rdtOld">
                                        29
                                      </td>
                                      <td data-value="30" class="rdtDay rdtOld">
                                        30
                                      </td>
                                      <td data-value="31" class="rdtDay rdtOld">
                                        31
                                      </td>
                                    </tr>
                                    <tr>
                                      <td data-value="1" class="rdtDay">
                                        1
                                      </td>
                                      <td data-value="2" class="rdtDay">
                                        2
                                      </td>
                                      <td data-value="3" class="rdtDay">
                                        3
                                      </td>
                                      <td data-value="4" class="rdtDay">
                                        4
                                      </td>
                                      <td data-value="5" class="rdtDay">
                                        5
                                      </td>
                                      <td data-value="6" class="rdtDay">
                                        6
                                      </td>
                                      <td data-value="7" class="rdtDay">
                                        7
                                      </td>
                                    </tr>
                                    <tr>
                                      <td data-value="8" class="rdtDay">
                                        8
                                      </td>
                                      <td data-value="9" class="rdtDay">
                                        9
                                      </td>
                                      <td data-value="10" class="rdtDay">
                                        10
                                      </td>
                                      <td data-value="11" class="rdtDay">
                                        11
                                      </td>
                                      <td data-value="12" class="rdtDay">
                                        12
                                      </td>
                                      <td data-value="13" class="rdtDay">
                                        13
                                      </td>
                                      <td data-value="14" class="rdtDay">
                                        14
                                      </td>
                                    </tr>
                                    <tr>
                                      <td data-value="15" class="rdtDay">
                                        15
                                      </td>
                                      <td data-value="16" class="rdtDay">
                                        16
                                      </td>
                                      <td data-value="17" class="rdtDay">
                                        17
                                      </td>
                                      <td data-value="18" class="rdtDay">
                                        18
                                      </td>
                                      <td data-value="19" class="rdtDay">
                                        19
                                      </td>
                                      <td data-value="20" class="rdtDay">
                                        20
                                      </td>
                                      <td data-value="21" class="rdtDay">
                                        21
                                      </td>
                                    </tr>
                                    <tr>
                                      <td
                                        data-value="22"
                                        class="rdtDay rdtToday"
                                      >
                                        22
                                      </td>
                                      <td data-value="23" class="rdtDay">
                                        23
                                      </td>
                                      <td data-value="24" class="rdtDay">
                                        24
                                      </td>
                                      <td data-value="25" class="rdtDay">
                                        25
                                      </td>
                                      <td data-value="26" class="rdtDay">
                                        26
                                      </td>
                                      <td data-value="27" class="rdtDay">
                                        27
                                      </td>
                                      <td data-value="28" class="rdtDay">
                                        28
                                      </td>
                                    </tr>
                                    <tr>
                                      <td data-value="29" class="rdtDay">
                                        29
                                      </td>
                                      <td data-value="30" class="rdtDay">
                                        30
                                      </td>
                                      <td data-value="1" class="rdtDay rdtNew">
                                        1
                                      </td>
                                      <td data-value="2" class="rdtDay rdtNew">
                                        2
                                      </td>
                                      <td data-value="3" class="rdtDay rdtNew">
                                        3
                                      </td>
                                      <td data-value="4" class="rdtDay rdtNew">
                                        4
                                      </td>
                                      <td data-value="5" class="rdtDay rdtNew">
                                        5
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="mt-4 mt-md-0 col-md-8">
                      <small class="d-block text-uppercase font-weight-bold mb-3">
                        Date range
                      </small>
                      <div class="row">
                        <div class="col-12 col-sm-6">
                          <div class="form-group">
                            <div class="input-group">
                              <div class="input-group-prepend">
                                <span class="input-group-text">
                                  <i class="ni ni-calendar-grid-58"></i>
                                </span>
                              </div>
                              <div class="rdt">
                                <input
                                  type="text"
                                  class="form-control"
                                  placeholder="Start Date"
                                  value=""
                                />
                                <div class="rdtPicker">
                                  <div class="rdtDays">
                                    <table>
                                      <thead>
                                        <tr>
                                          <th class="rdtPrev">
                                            <span>‹</span>
                                          </th>
                                          <th
                                            class="rdtSwitch"
                                            colspan="5"
                                            data-value="10"
                                          >
                                            November 2020
                                          </th>
                                          <th class="rdtNext">
                                            <span>›</span>
                                          </th>
                                        </tr>
                                        <tr>
                                          <th class="dow">Su</th>
                                          <th class="dow">Mo</th>
                                          <th class="dow">Tu</th>
                                          <th class="dow">We</th>
                                          <th class="dow">Th</th>
                                          <th class="dow">Fr</th>
                                          <th class="dow">Sa</th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        <tr>
                                          <td
                                            data-value="25"
                                            class="rdtDay rdtOld"
                                          >
                                            25
                                          </td>
                                          <td
                                            data-value="26"
                                            class="rdtDay rdtOld"
                                          >
                                            26
                                          </td>
                                          <td
                                            data-value="27"
                                            class="rdtDay rdtOld"
                                          >
                                            27
                                          </td>
                                          <td
                                            data-value="28"
                                            class="rdtDay rdtOld"
                                          >
                                            28
                                          </td>
                                          <td
                                            data-value="29"
                                            class="rdtDay rdtOld"
                                          >
                                            29
                                          </td>
                                          <td
                                            data-value="30"
                                            class="rdtDay rdtOld"
                                          >
                                            30
                                          </td>
                                          <td
                                            data-value="31"
                                            class="rdtDay rdtOld"
                                          >
                                            31
                                          </td>
                                        </tr>
                                        <tr>
                                          <td data-value="1" class="rdtDay">
                                            1
                                          </td>
                                          <td data-value="2" class="rdtDay">
                                            2
                                          </td>
                                          <td data-value="3" class="rdtDay">
                                            3
                                          </td>
                                          <td data-value="4" class="rdtDay">
                                            4
                                          </td>
                                          <td data-value="5" class="rdtDay">
                                            5
                                          </td>
                                          <td data-value="6" class="rdtDay">
                                            6
                                          </td>
                                          <td data-value="7" class="rdtDay">
                                            7
                                          </td>
                                        </tr>
                                        <tr>
                                          <td data-value="8" class="rdtDay">
                                            8
                                          </td>
                                          <td data-value="9" class="rdtDay">
                                            9
                                          </td>
                                          <td data-value="10" class="rdtDay">
                                            10
                                          </td>
                                          <td data-value="11" class="rdtDay">
                                            11
                                          </td>
                                          <td data-value="12" class="rdtDay">
                                            12
                                          </td>
                                          <td data-value="13" class="rdtDay">
                                            13
                                          </td>
                                          <td data-value="14" class="rdtDay">
                                            14
                                          </td>
                                        </tr>
                                        <tr>
                                          <td data-value="15" class="rdtDay">
                                            15
                                          </td>
                                          <td data-value="16" class="rdtDay">
                                            16
                                          </td>
                                          <td data-value="17" class="rdtDay">
                                            17
                                          </td>
                                          <td data-value="18" class="rdtDay">
                                            18
                                          </td>
                                          <td data-value="19" class="rdtDay">
                                            19
                                          </td>
                                          <td data-value="20" class="rdtDay">
                                            20
                                          </td>
                                          <td data-value="21" class="rdtDay">
                                            21
                                          </td>
                                        </tr>
                                        <tr>
                                          <td
                                            data-value="22"
                                            class="rdtDay rdtToday"
                                          >
                                            22
                                          </td>
                                          <td data-value="23" class="rdtDay">
                                            23
                                          </td>
                                          <td data-value="24" class="rdtDay">
                                            24
                                          </td>
                                          <td data-value="25" class="rdtDay">
                                            25
                                          </td>
                                          <td data-value="26" class="rdtDay">
                                            26
                                          </td>
                                          <td data-value="27" class="rdtDay">
                                            27
                                          </td>
                                          <td data-value="28" class="rdtDay">
                                            28
                                          </td>
                                        </tr>
                                        <tr>
                                          <td data-value="29" class="rdtDay">
                                            29
                                          </td>
                                          <td data-value="30" class="rdtDay">
                                            30
                                          </td>
                                          <td
                                            data-value="1"
                                            class="rdtDay rdtNew"
                                          >
                                            1
                                          </td>
                                          <td
                                            data-value="2"
                                            class="rdtDay rdtNew"
                                          >
                                            2
                                          </td>
                                          <td
                                            data-value="3"
                                            class="rdtDay rdtNew"
                                          >
                                            3
                                          </td>
                                          <td
                                            data-value="4"
                                            class="rdtDay rdtNew"
                                          >
                                            4
                                          </td>
                                          <td
                                            data-value="5"
                                            class="rdtDay rdtNew"
                                          >
                                            5
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-12 col-sm-6">
                          <div class="form-group">
                            <div class="input-group">
                              <div class="input-group-prepend">
                                <span class="input-group-text">
                                  <i class="ni ni-calendar-grid-58"></i>
                                </span>
                              </div>
                              <div class="rdt rdtPickerOnRight">
                                <input
                                  type="text"
                                  class="form-control"
                                  placeholder="End Date"
                                  value=""
                                />
                                <div class="rdtPicker">
                                  <div class="rdtDays">
                                    <table>
                                      <thead>
                                        <tr>
                                          <th class="rdtPrev">
                                            <span>‹</span>
                                          </th>
                                          <th
                                            class="rdtSwitch"
                                            colspan="5"
                                            data-value="10"
                                          >
                                            November 2020
                                          </th>
                                          <th class="rdtNext">
                                            <span>›</span>
                                          </th>
                                        </tr>
                                        <tr>
                                          <th class="dow">Su</th>
                                          <th class="dow">Mo</th>
                                          <th class="dow">Tu</th>
                                          <th class="dow">We</th>
                                          <th class="dow">Th</th>
                                          <th class="dow">Fr</th>
                                          <th class="dow">Sa</th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        <tr>
                                          <td
                                            data-value="25"
                                            class="rdtDay rdtOld"
                                          >
                                            25
                                          </td>
                                          <td
                                            data-value="26"
                                            class="rdtDay rdtOld"
                                          >
                                            26
                                          </td>
                                          <td
                                            data-value="27"
                                            class="rdtDay rdtOld"
                                          >
                                            27
                                          </td>
                                          <td
                                            data-value="28"
                                            class="rdtDay rdtOld"
                                          >
                                            28
                                          </td>
                                          <td
                                            data-value="29"
                                            class="rdtDay rdtOld"
                                          >
                                            29
                                          </td>
                                          <td
                                            data-value="30"
                                            class="rdtDay rdtOld"
                                          >
                                            30
                                          </td>
                                          <td
                                            data-value="31"
                                            class="rdtDay rdtOld"
                                          >
                                            31
                                          </td>
                                        </tr>
                                        <tr>
                                          <td data-value="1" class="rdtDay">
                                            1
                                          </td>
                                          <td data-value="2" class="rdtDay">
                                            2
                                          </td>
                                          <td data-value="3" class="rdtDay">
                                            3
                                          </td>
                                          <td data-value="4" class="rdtDay">
                                            4
                                          </td>
                                          <td data-value="5" class="rdtDay">
                                            5
                                          </td>
                                          <td data-value="6" class="rdtDay">
                                            6
                                          </td>
                                          <td data-value="7" class="rdtDay">
                                            7
                                          </td>
                                        </tr>
                                        <tr>
                                          <td data-value="8" class="rdtDay">
                                            8
                                          </td>
                                          <td data-value="9" class="rdtDay">
                                            9
                                          </td>
                                          <td data-value="10" class="rdtDay">
                                            10
                                          </td>
                                          <td data-value="11" class="rdtDay">
                                            11
                                          </td>
                                          <td data-value="12" class="rdtDay">
                                            12
                                          </td>
                                          <td data-value="13" class="rdtDay">
                                            13
                                          </td>
                                          <td data-value="14" class="rdtDay">
                                            14
                                          </td>
                                        </tr>
                                        <tr>
                                          <td data-value="15" class="rdtDay">
                                            15
                                          </td>
                                          <td data-value="16" class="rdtDay">
                                            16
                                          </td>
                                          <td data-value="17" class="rdtDay">
                                            17
                                          </td>
                                          <td data-value="18" class="rdtDay">
                                            18
                                          </td>
                                          <td data-value="19" class="rdtDay">
                                            19
                                          </td>
                                          <td data-value="20" class="rdtDay">
                                            20
                                          </td>
                                          <td data-value="21" class="rdtDay">
                                            21
                                          </td>
                                        </tr>
                                        <tr>
                                          <td
                                            data-value="22"
                                            class="rdtDay rdtToday"
                                          >
                                            22
                                          </td>
                                          <td data-value="23" class="rdtDay">
                                            23
                                          </td>
                                          <td data-value="24" class="rdtDay">
                                            24
                                          </td>
                                          <td data-value="25" class="rdtDay">
                                            25
                                          </td>
                                          <td data-value="26" class="rdtDay">
                                            26
                                          </td>
                                          <td data-value="27" class="rdtDay">
                                            27
                                          </td>
                                          <td data-value="28" class="rdtDay">
                                            28
                                          </td>
                                        </tr>
                                        <tr>
                                          <td data-value="29" class="rdtDay">
                                            29
                                          </td>
                                          <td data-value="30" class="rdtDay">
                                            30
                                          </td>
                                          <td
                                            data-value="1"
                                            class="rdtDay rdtNew"
                                          >
                                            1
                                          </td>
                                          <td
                                            data-value="2"
                                            class="rdtDay rdtNew"
                                          >
                                            2
                                          </td>
                                          <td
                                            data-value="3"
                                            class="rdtDay rdtNew"
                                          >
                                            3
                                          </td>
                                          <td
                                            data-value="4"
                                            class="rdtDay rdtNew"
                                          >
                                            4
                                          </td>
                                          <td
                                            data-value="5"
                                            class="rdtDay rdtNew"
                                          >
                                            5
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <h3 class="h4 text-success font-weight-bold mt-md mb-4">
                    Tooltips &amp; Popovers
                  </h3>
                  <div class="row">
                    <div class="col-lg-6">
                      <small class="d-block text-uppercase font-weight-bold mb-3">
                        Tooltips
                      </small>
                      <button
                        id="tooltip38321129"
                        class="btn-tooltip btn btn-primary btn-sm"
                      >
                        On left
                      </button>
                      <button
                        id="tooltip556394744"
                        class="btn-tooltip btn btn-primary btn-sm"
                      >
                        On top
                      </button>
                      <button
                        id="tooltip613577679"
                        class="btn-tooltip btn btn-primary btn-sm"
                      >
                        On bottom
                      </button>
                      <button
                        id="tooltip476554683"
                        class="btn-tooltip btn btn-primary btn-sm"
                      >
                        On right
                      </button>
                    </div>
                    <div class="mt-4 mt-lg-0 col-lg-6">
                      <small class="d-block text-uppercase font-weight-bold mb-3">
                        Popovers
                      </small>
                      <button
                        id="tooltip391311689"
                        class="btn btn-default btn-sm"
                      >
                        On left
                      </button>
                      <button
                        id="tooltip62844899"
                        class="btn btn-default btn-sm"
                      >
                        On top
                      </button>
                      <button
                        id="tooltip969535472"
                        class="btn btn-default btn-sm"
                      >
                        On right
                      </button>
                      <button
                        id="tooltip60850592"
                        class="btn btn-default btn-sm"
                      >
                        On bottom
                      </button>
                    </div>
                  </div>
                </div>
              </section>
            </Container>
          </section>
          <Carousel />
          <Icons />
          <Login />
          <Download />
        </main>
        <CardsFooter />
      </>
    );
  }
}

export default Index;
