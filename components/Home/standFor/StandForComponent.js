import React from 'react';
import { Card } from 'antd';
import StandforAllHeaderComponent from './StandforAllHeaderComponent';
import StandForAllDataComponent from './StandForAllDataComponent';

const StandForComponent = () => {

  return (
    <div className="section-full content-inner bg-gray testi-area">
            <div className="container">
              <StandforAllHeaderComponent title='What we Stand For' desc='Innovation, Collaboration and Progress' />
                    <StandForAllDataComponent
                    title1='Staff Expertise' 
                    decs1='We don’t employ order-takers, 
                    we employ problem solvers. Our
                    team is the most experienced in 
                    the industry with a close 
                    understanding of our products 
                    and how they’re used'
                    title2='Service Commitment'
                    desc2='We ensure that we prioritise our client 
                    needs and empower our staff to use 
                    their initiative. Whatever the situation, 
                    we never say NO to a request or
                    challenge'
                    title3='Stock Availability'
                    desc3='Our procurement strategy is 
                    geared to maximising availability
                    and reducing any time loss. You 
                    will always have the part you 
                    need sourced from our
                    extensive network'
                    />
                    </div>
            </div>
  )
}

export default StandForComponent