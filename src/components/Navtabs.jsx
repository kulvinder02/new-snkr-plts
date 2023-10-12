import React from 'react'

function Navtabs() {
  return (
    <div>
        <section>
      <div className="container">
        <div className="mt-lg-5 mb-4 mb-lg-5 pt-4">
          <nav>
            <div className="nav nav-tabs" id="nav-tab" role="tablist">
              <button
                className="nav-link active"
                id="nav-home-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-home"
                type="button"
                role="tab"
                aria-controls="nav-home"
                aria-selected="true"
              >
                DESCRIPTION
              </button>
              <button
                className="nav-link"
                id="nav-profile-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-profile"
                type="button"
                role="tab"
                aria-controls="nav-profile"
                aria-selected="false"
              >
                ADDITIONAL INFORMATION
              </button>
              <button
                className="nav-link"
                id="nav-contact-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-contact"
                type="button"
                role="tab"
                aria-controls="nav-contact"
                aria-selected="false"
              >
                REVIEWS (1)
              </button>
            </div>
          </nav>
          <div className="tab-content d-flex text-start" id="nav-tabContent">
            <div
              className="tab-pane fade ff-popins fs-20 fw-400 clr-black opcty-7 mt-3 mt-lg-4 show active"
              id="nav-home"
              role="tabpanel"
              aria-labelledby="nav-home-tab"
            >
              Sed nec ultricies felis, vitae facilisis ipsum. Morbi id turpis
              euismod, rhoncus tortor quis, lobortis sapien. Sed imperdiet nulla
              in leo ullamcorper, in finibus elit porta. Sed eget congue neque,
              mattis finibus neque. nec massa in ligula vestibulum mattis.
              Suspendisse imperdiet lorem eleifend nisi euismod, vIn vel dolor
              ac augue pretium suscipit. Ut el consequat ipsum luctus. Morbi
              auctor vulputate hendrerit. Etiam vel lectus tortor. Pellentesque
              non pharetra mi. Cura
            </div>
            <div
              className="tab-pane fade ff-popins fs-20 fw-400 clr-black opcty-7 mt-3 mt-lg-4"
              id="nav-profile"
              role="tabpanel"
              aria-labelledby="nav-profile-tab"
            >
              Sed nec ultricies felis, vitae facilisis ipsum. Morbi id turpis
              euismod, rhoncus tortor quis, lobortis sapien. Sed imperdiet nulla
              in leo ullamcorper, in finibus elit porta. Sed eget congue neque,
              mattis finibus neque.
            </div>
            <div
              className="tab-pane fade ff-popins fs-20 fw-400 clr-black opcty-7 mt-3 mt-lg-4"
              id="nav-contact"
              role="tabpanel"
              aria-labelledby="nav-contact-tab"
            >
              Sed nec ultricies felis, vitae facilisis ipsum. Morbi id turpis
              euismod, rhoncus tortor quis, lobortis sapien. Sed imperdiet nulla
              in leo ullamcorper, in finibus elit porta. Sed eget congue neque,
              mattis finibus neque. In vel dolor ac augue pretium suscipit. Ut
              nec massa in ligula vestibulum mattis.
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Navtabs