import React, { Component } from "react";
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";
import {Header} from 'semantic-ui-react';



<h3 class="ui block header">Block Header</h3>



<div class="ui link cards">
  <div class="card">
    <div class="image">
      <img src="/images/avatar2/large/matthew.png">
    </div>
    <div class="content">
      <div class="header">Matt Giampietro</div>
      <div class="meta">
        <a>Friends</a>
      </div>
      <div class="description">
        Matthew is an interior designer living in New York.
      </div>
    </div>
    <div class="extra content">
      <span class="right floated">
        Joined in 2013
      </span>
      <span>
        <i class="user icon"></i>
        75 Friends
      </span>
    </div>
  </div>
  <div class="card">
    <div class="image">
      <img src="/images/avatar2/large/molly.png">
    </div>
    <div class="content">
      <div class="header">Molly</div>
      <div class="meta">
        <span class="date">Coworker</span>
      </div>
      <div class="description">
        Molly is a personal assistant living in Paris.
      </div>
    </div>
    <div class="extra content">
      <span class="right floated">
        Joined in 2011
      </span>
      <span>
        <i class="user icon"></i>
        35 Friends
      </span>
    </div>
  </div>
  <div class="card">
    <div class="image">
      <img src="/images/avatar2/large/elyse.png">
    </div>
    <div class="content">
      <div class="header">Elyse</div>
      <div class="meta">
        <a>Coworker</a>
      </div>
      <div class="description">
        Elyse is a copywriter working in New York.
      </div>
    </div>
    <div class="extra content">
      <span class="right floated">
        Joined in 2014
      </span>
      <span>
        <i class="user icon"></i>
        151 Friends
      </span>
    </div>
  </div>
</div>



<div class="ui card">
  <div class="image">
    <img src="https://react.semantic-ui.com/images/avatar/large/matthew.png"/>
    </div>
  <div class="content">
    <div class="header">Matthew</div>
    <div class="meta">
      <span class="date">Joined in 2015</span>
  </div>
  <div class="description">Matthew is a musician living in Nashville.</div>
  </div>
  <div class="extra content">
    <a><i aria-hidden="true" class="user icon"></i>22 Friends</a>
  </div>
</div>



<div class="ui compact menu">
  <div role="listbox" aria-expanded="false" class="ui item simple dropdown" tabindex="0">
    <div aria-atomic="true" aria-live="polite" role="alert" class="divider text">Dropdown</div>
    <i aria-hidden="true" class="dropdown icon"></i>
    <div class="menu transition">
      <div style="pointer-events:all" role="option" aria-checked="false" aria-selected="true" class="selected item">
        <span class="text">Choice 1</span>
        </div>
        <div style="pointer-events:all" role="option" aria-checked="false" aria-selected="false" class="item">
          <span class="text">Choice 2</span></div>
          <div style="pointer-events:all" role="option" aria-checked="false" aria-selected="false" class="item">
            <span class="text">Choice 3</span>
            </div>
            </div>
            </div>
            </div>


            <div role="listbox" aria-expanded="false" class="ui selection dropdown" tabindex="0">
              <div aria-atomic="true" aria-live="polite" role="alert" class="divider default text">
                Select your country</div>
                <i aria-hidden="true" class="dropdown icon">
                  </i>
                  <div class="menu transition">
                    <div style="pointer-events:all" role="option" aria-checked="false" aria-selected="true" class="selected item">
                      <span class="text">Afghanistan</span>
                      </div>
                      <div style="pointer-events:all" role="option" aria-checked="false" aria-selected="false" class="item">
                        <span class="text">Aland Islands</span>
                        </div>
                        <div style="pointer-events:all" role="option" aria-checked="false" aria-selected="false" class="item">
                          <span class="text">Albania</span></div><div style="pointer-events:all" role="option" aria-checked="false" aria-selected="false" class="item"><span class="text">Algeria</span></div><div style="pointer-events:all" role="option" aria-checked="false" aria-selected="false" class="item"><span class="text">American Samoa</span></div><div style="pointer-events:all" role="option" aria-checked="false" aria-selected="false" class="item"><span class="text">Andorra</span></div><div style="pointer-events:all" role="option" aria-checked="false" aria-selected="false" class="item"><span class="text">Angola</span></div><div style="pointer-events:all" role="option" aria-checked="false" aria-selected="false" class="item"><span class="text">Anguilla</span></div><div style="pointer-events:all" role="option" aria-checked="false" aria-selected="false" class="item"><span class="text">Antigua</span></div><div style="pointer-events:all" role="option" aria-checked="false" aria-selected="false" class="item"><span class="text">Argentina</span></div><div style="pointer-events:all" role="option" aria-checked="false" aria-selected="false" class="item"><span class="text">Armenia</span></div><div style="pointer-events:all" role="option" aria-checked="false" aria-selected="false" class="item"><span class="text">Aruba</span></div><div style="pointer-events:all" role="option" aria-checked="false" aria-selected="false" class="item"><span class="text">Australia</span></div><div style="pointer-events:all" role="option" aria-checked="false" aria-selected="false" class="item"><span class="text">Austria</span></div><div style="pointer-events:all" role="option" aria-checked="false" aria-selected="false" class="item"><span class="text">Azerbaijan</span></div><div style="pointer-events:all" role="option" aria-checked="false" aria-selected="false" class="item"><span class="text">Bahamas</span></div><div style="pointer-events:all" role="option" aria-checked="false" aria-selected="false" class="item"><span class="text">Bahrain</span></div><div style="pointer-events:all" role="option" aria-checked="false" aria-selected="false" class="item"><span class="text">Bangladesh</span></div><div style="pointer-events:all" role="option" aria-checked="false" aria-selected="false" class="item"><span class="text">Barbados</span></div><div style="pointer-events:all" role="option" aria-checked="false" aria-selected="false" class="item"><span class="text">Belarus</span></div><div style="pointer-events:all" role="option" aria-checked="false" aria-selected="false" class="item"><span class="text">Belgium</span></div><div style="pointer-events:all" role="option" aria-checked="false" aria-selected="false" class="item"><span class="text">Belize</span></div><div style="pointer-events:all" role="option" aria-checked="false" aria-selected="false" class="item"><span class="text">Benin</span></div></div></div>