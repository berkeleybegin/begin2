/** @jsx jsx */
import {
    jsx,
    Card,
    Heading,
    Text,
    Link,
    Input,
    Flex,
    Label,
    Checkbox,
  } from "theme-ui"

import "./toggle.css"
import styled from 'styled-components';

export default function Toggle(props) {
    return (
        <div>
        <Label sx={{ 
            position: "relative",
            display: "inline-block",
            width: "60px",
            height: "34px"
            }} >
            <input sx={{opacity: 0,
                width: 0,
                height: 0,
            }}
                defaultChecked={true}
                />
            <Span>
            </Span>
        </Label>
        Hi
        </div>
    );
}

const Span = styled.span`
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: .4s;
    transition: .4s;
    border-radius: 34px;
    :before{
        position: absolute;
        content: "";
        height: 26px;
        width: 26px;
        left: 4px;
        bottom: 4px;
        background-color: white;
        -webkit-transition: .4s;
        transition: .4s;
        border-radius: 50%;
    }
    input:checked + .slider {
        background-color: #2196F3;
      }
      
      input:focus + .slider {
        box-shadow: 0 0 1px #2196F3;
      }
      
      input:checked + .slider:before {
        -webkit-transform: translateX(26px);
        -ms-transform: translateX(26px);
        transform: translateX(26px);
      }
`