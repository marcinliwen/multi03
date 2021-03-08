import React from 'react'
import PropTypes from 'prop-types'

import Material_Icon from '../assets/material.svg'
import Chat_Icon from '../assets/chat.svg'
import Needle_Icon from '../assets/needle.svg'
import Design from '../assets/design.svg'

const FeaturesMark = () => (
            <section className="section bg-primary">
                <div className="container">
                <div class="columns features"> 
                  <div class="column has-text-centered">
                    <div>
                    <div class="title"><Design height="42px" width="42px" fill="#D9C693"/></div>
                      <p class="heading">Działamy kompleksowo, od projektu po montaż</p>
                    </div>
                  </div>
                  <div class="column has-text-centered">
                    <div>
                    <div class="title"><Material_Icon height="42px" width="42px" fill="#D9C693"/></div>
                      <p class="heading">Kożystamy z materiałów najlepszej jakości</p>
                    </div>
                  </div>
                  <div class="column has-text-centered">
                    <div>
                    <div class="title"><Needle_Icon height="42px" width="42px" fill="#D9C693"/></div>
                      <p class="heading">Wszystkie usługi wykonujemy ręcznie w naszej pracowni</p>
                    </div>
                  </div>
                  <div class="column has-text-centered">
                    <div>
                    <div class="title"><Chat_Icon height="42px" width="42px" fill="#D9C693"/></div>
                      <p class="heading">Fachowo doradzamy, dzielimy się wiedzą i doświadczeniem</p>
                    </div>
                  </div>
                </div>
                </div>
               
             </section>
)

export default FeaturesMark