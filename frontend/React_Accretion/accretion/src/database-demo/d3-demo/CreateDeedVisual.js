import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

import '../DatabaseDemo.css'

const CreateDeedVisual = () => {
    const data = [
        {
            "owner": "Balmer", 
            "start": "1985",
            "end": "2021", 
            "deed": {
                "date": "1985-10-02T00:00:00",
                "book_page": "16475/327",
            },
            "mortgage": [
                {
                    "date": "1985-10-02T00:00:00",
                    "book_page": "17878/285",
                },
                {
                    "date": "1998-07-15T00:00:00",
                    "book_page": "28840/203",
                },
                {
                    "date": "2001-07-09T00:00:00",
                    "book_page": "33217/37",
                },
                {
                    "date": "2003-01-22T00:00:00",
                    "book_page": "37743/485",
                }
            ],
            "discharge": [
                {
                    "date": "2021-11-30T00:00:00",
                    "book_page": "79245/123",
                }, 
            ]
        },
        {
            "owner": "Ni",
            "start": "2021",
            "end": "2024", 
            "deed": {
                "date": "2021-12-03T00:00:00",
                "book_page": "79280/456",
            },
            "mortgage": [
                {
                    "date": "2022-03-22T00:00:00",
                    "book_page": "79859/460",
                },
            ],
            "discharge": [
                {
                    "date": "2021-12-14T00:00:00",
                    "book_page": "79280/454",
                }, 
            ]
        },
    ];    

    const svgRef = useRef();
    const tooltipRef = useRef(null); // Ref for the tooltip

    const height = 300; 
    const width = 600;

    const borderRadiusOff = 10; 
    const borderRadiusOn = 20; 

    const heightRect = 50;
    const heightTitle = 10; 
    const marginTopBottom = 10;

    const fillOpacityOff = 0.6; 
    const fillOpacityOn = 1;     

    const yearTotal = data[data.length-1].end - data[0].start; 

    const widthScale = d3.scaleLinear()
                            .domain([0, yearTotal])
                            .range([0, width]) 
    
    const gapDeed = 10;     
    const yTitleDeed = marginTopBottom; 
    const yDeed = yTitleDeed + marginTopBottom + heightTitle;
    const heightDeed = heightRect; 
    const colorDeed = "lightblue"; 

    const gapMortgage = 10; 
    const yTitleMortgage = yDeed + heightRect + marginTopBottom * 2;
    const yMortgage = yTitleMortgage + marginTopBottom + heightTitle; 
    const widthMortgage = 20;
    const colorMortgage = "rgba(198, 45, 205, 0.5)"; 

    const gapDischarge = 10;
    const yTitleDischarge = yMortgage + heightRect + marginTopBottom * 2; 
    const yDischarge = yTitleDischarge + marginTopBottom + heightTitle; 
    const widthDischarge = 20; 
    const colorDischarge = "lightgreen";

    useEffect(() => {        
        const svg = d3.select(svgRef.current)
                        .attr("height", height) 
                        .attr("width", width) 
        
        
        const tooltip = d3.select(tooltipRef.current) // Select the tooltip
                            .style('position', 'absolute')
                            .style('background-color', 'white')
                            .style('border', '1px solid black')
                            .style('padding', '5px')
                            .style('border-radius', '5px')
                            .style('visibility', 'hidden') // Initially hide the tooltip
                            .text('');
        
        const showTooltip = (text) => {
            tooltip.style('visibility', 'visible') // Show the tooltip
                    .text(text);
        };
        
        const hideTooltip = () => {
            tooltip.style('visibility', 'hidden'); // Hide the tooltip
        };
        
        const showRectOn = (obj) => {
            obj
                .attr("rx", borderRadiusOn)
                .attr("ry", borderRadiusOn)
                .attr("stroke", "gray")
                .attr("stroke-width", 2)
                .attr("fill-opacity", fillOpacityOn)
                
        }

        const showRectOff = (obj) => {
            obj                
                .attr("stroke-width", 0)
                .attr("fill-opacity", fillOpacityOff)
                .attr("rx", borderRadiusOff)
                .attr("ry", borderRadiusOff)
                
        }
        
        // deed title
        svg.append("text")
            .attr("x", width / 2) // x-coordinate of the center of the rectangle
            .attr("y", yTitleDeed) // y-coordinate of the center of the rectangle
            .attr("text-anchor", "middle") // center-align the text horizontally
            .attr("dominant-baseline", "middle") // center the text vertically
            .style("text-color","lightblue")
            .text("deed"); // set the text content 

        svg.append("text")
            .attr("x", width / 2) // x-coordinate of the center of the rectangle
            .attr("y", yTitleMortgage) // y-coordinate of the center of the rectangle
            .attr("text-anchor", "middle") // center-align the text horizontally
            .attr("dominant-baseline", "middle") // center the text vertically
            .style("text-color","lightblue")
            .text("mortgage"); // set the text content 
        
        svg.append("text")
            .attr("x", width / 2) // x-coordinate of the center of the rectangle
            .attr("y", yTitleDischarge) // y-coordinate of the center of the rectangle
            .attr("text-anchor", "middle") // center-align the text horizontally
            .attr("dominant-baseline", "middle") // center the text vertically
            .style("text-color","lightblue")
            .text("discharge"); // set the text content 
        
        let xDeed = 0 + gapDeed;         
        
        for (let i = 0; i < data.length; i++) {
            const element = data[i];                                        
            const deedWidth = widthScale(element.end - element.start) - gapDeed; 
            const deedBookPage = element.book_page; 

            const rectDeed = svg.append("rect")
                                .attr("class", "link rect-normal")
                                .attr("x", xDeed) 
                                .attr("y", yDeed)
                                .attr("width", deedWidth)
                                .attr("height", heightDeed)
                                .attr("fill", colorDeed) 
                                .attr("rx", borderRadiusOff)
                                .attr("ry",borderRadiusOff)
                                .attr("fill-opacity", fillOpacityOff);

            rectDeed.on("click", () => { // onClick the button to the link                 
                    window.location.href = deedBookPage; // Navigate to the link with corresponding ID
                })
                .on('mouseover', () => {
                    showRectOn(rectDeed);
                    showTooltip( // Show deed details on mouseover
                        "owner: " + element.owner + "\n" + 
                        "start: " +element.start + "\n" + 
                        "end: " + element.end
                    )                
                })
                .on('mousemove', (event) => { // Adjust tooltip position based on mouse position
                    tooltip.style('top', (event.pageY - 10) + 'px')
                        .style('left', (event.pageX + 10) + 'px');
                })
                .on('mouseout', () => {// Hide tooltip on mouseout     
                    showRectOff(rectDeed);
                    hideTooltip();                     
                });                                               
            // move the x deed forward 
            xDeed += deedWidth + gapDeed/2; 

            // Append mortgage info                         
            if (element.mortgage){
                for (let j = 0; j < element.mortgage.length; j++) {
                    const mortgage = element.mortgage[j];                     
                    let xMortgage;
                    if (j == 0 & i == 0) {
                        xMortgage = gapMortgage;
                    } else{
                        xMortgage = widthScale(
                            new Date(mortgage.date).getFullYear() - data[0].start 
                        ); 
                    }
                    const rectMortgage = svg.append("rect")
                        .attr("class", "link rect-normal")
                        .attr("x", xMortgage) 
                        .attr("y", yMortgage)
                        .attr("width", widthMortgage)
                        .attr("height", heightDeed)
                        .attr("fill", colorMortgage) 
                        .attr("rx", borderRadiusOff)
                        .attr("ry",borderRadiusOff)
                        .attr("fill-opacity", fillOpacityOff)             
                        .on("click", () => { // onClick the button to the link                 
                            window.location.href = mortgage.book_page; // Navigate to the link with corresponding ID
                        })
                        .on('mouseover', () => {
                            showRectOn(rectMortgage);
                            showTooltip( // Show deed details on mouseover
                                "date: " + new Date(mortgage.date).getFullYear()
                            )                
                        })
                        .on('mousemove', (event) => { // Adjust tooltip position based on mouse position
                            tooltip.style('top', (event.pageY - 10) + 'px')
                                .style('left', (event.pageX + 10) + 'px');
                        })
                        .on('mouseout', () => {// Hide tooltip on mouseout     
                            showRectOff(rectMortgage);
                            hideTooltip(); 
                            d3.select(this)
                                .attr("rx", borderRadiusOff)
                                .attr("ry", borderRadiusOff)
                        });     

                }
            }

            // Append discharge info                                  
            if (element.discharge) {                                
                for (let j = 0; j < element.discharge.length; j++) {
                    const discharge = element.discharge[j];                                                                     
                    let xDischarge;
                    // if (j == 0 & i == 0) {
                    //     xDischarge = gapDischarge;
                    // } else{
                        xDischarge = widthScale(
                            new Date(discharge.date).getFullYear() - data[0].start 
                        ); 
                    // }
                    
                    const rectDischarge = svg.append("rect")
                        .attr("class", "link rect-normal")
                        .attr("x", xDischarge) 
                        .attr("y", yDischarge)
                        .attr("width", widthDischarge)
                        .attr("height", heightDeed)
                        .attr("fill", colorDischarge) 
                        .attr("rx", borderRadiusOff)
                        .attr("ry",borderRadiusOff)
                        .attr("fill-opacity", fillOpacityOff)             
                        .on("click", () => { // onClick the button to the link                 
                            window.location.href = discharge.book_page; // Navigate to the link with corresponding ID
                        })
                        .on('mouseover', () => {
                            showRectOn(rectDischarge);
                            showTooltip( // Show deed details on mouseover
                                "date: " + new Date(discharge.date).getFullYear()
                            )                
                        })
                        .on('mousemove', (event) => { // Adjust tooltip position based on mouse position
                            tooltip.style('top', (event.pageY - 10) + 'px')
                                .style('left', (event.pageX + 10) + 'px');
                        })
                        .on('mouseout', () => {// Hide tooltip on mouseout     
                            showRectOff(rectDischarge);
                            hideTooltip();                             
                        });     

                }
            }
        
            // console.log("Discharge Date:", element.discharge.date);
            // console.log("Discharge Book Page:", element.discharge.book_page);            

            
        }
    

    //     // mortgage 
    //     let mortgage1_x1 = new Date(data[0].mortgage[0].date).getFullYear() - data[0].start 
    //     mortgage1_x1 = widthScale(mortgage1_x1) + 10

    //     let mortgage1_x2 = new Date(data[0].mortgage[1].date).getFullYear() - data[0].start
    //     mortgage1_x2 = widthScale(mortgage1_x2)

    //     let mortgage1_x3 = new Date(data[0].mortgage[2].date).getFullYear() - data[0].start
    //     mortgage1_x3 = widthScale(mortgage1_x3)

    //     let mortgage1_x4 = new Date(data[0].mortgage[3].date).getFullYear() - data[0].start
    //     mortgage1_x4 = widthScale(mortgage1_x4)

    //     // discharges 
    //     let discharge1_x1 = new Date(data[0].discharge.date).getFullYear() - data[0].start 
    //     discharge1_x1 = widthScale(discharge1_x1) 



    // //owner2 
    // const box2x = box1Width + gapDeed; 
    // const box2Width = widthScale(data[1].end - data[1].start); 

    //     // owner2 mortgage 
    //     let mortgage2_x1 = new Date(data[1].mortgage[0].date).getFullYear() - data[1].start 
    //     mortgage2_x1 = widthScale(mortgage2_x1) + box2x; 

    //     // discharges 
    //     let discharge2_x1 = new Date(data[1].discharge.date).getFullYear() - data[1].start 
    //     discharge2_x1 = widthScale(discharge2_x1) 

    
    //     // const svg = d3.select(svgRef.current)
    //     //                 .attr("height", height) 
    //     //                 .attr("width", width) 
        
        
    //     // const tooltip = d3.select(tooltipRef.current) // Select the tooltip
    //     //                     .style('position', 'absolute')
    //     //                     .style('background-color', 'white')
    //     //                     .style('border', '1px solid black')
    //     //                     .style('padding', '5px')
    //     //                     .style('border-radius', '5px')
    //     //                     .style('visibility', 'hidden') // Initially hide the tooltip
    //     //                     .text('');
        
    //     // const showTooltip = (text) => {
    //     //     tooltip.style('visibility', 'visible') // Show the tooltip
    //     //             .text(text);
    //     // };
        
    //     // const hideTooltip = () => {
    //     //     tooltip.style('visibility', 'hidden'); // Hide the tooltip
    //     // };                                            

    //     // append owner1 
    //     // svg.append("rect")
    //     //     .attr("class", "link rect-normal")
    //     //     .attr("x", box1x) 
    //     //     .attr("y", 10)
    //     //     .attr("width", box1Width)
    //     //     .attr("height", heightRect)
    //     //     .attr("fill", colorDeed) 
    //     //     .attr("rx", borderRadiusOff)
    //     //     .attr("ry",borderRadiusOff)             
    //     //     .on("click", () => { // onClick the button to the link 
    //     //         // Define action on click for each rectangle
    //     //         window.location.href = data[0].deed.book_page; // Navigate to the link with corresponding ID
    //     //     })
    //     //     .on('mouseover', () => {
    //     //         d3.select(this)
    //     //             .attr("fill", "red")
    //     //         showTooltip( // Show deed details on mouseover
    //     //             "owner: " + data[0].owner + "\n" + 
    //     //             "start: " + data[0].start + "\n" + 
    //     //             "end: " + data[0].end
    //     //         ) 
    //     //         // d3.select(this) 
    //     //         //     .attr("rx", borderRadiusOn)
    //     //         //     .attr("ry", borderRadiusOn)
    //     //     })
    //     //     .on('mousemove', (event) => { // Adjust tooltip position based on mouse position
    //     //         tooltip.style('top', (event.pageY - 10) + 'px')
    //     //                .style('left', (event.pageX + 10) + 'px');
    //     //     })
    //     //     .on('mouseout', () => {// Hide tooltip on mouseout     
    //     //         hideTooltip(); 
    //     //         d3.select(this)
    //     //             .attr("rx", borderRadiusOff)
    //     //             .attr("ry", borderRadiusOff)
    //     //     });                                    

    //     svg.append("text")
    //         .attr("x", box1x + 30) // x-coordinate of the center of the rectangle
    //         .attr("y", heightRect + 30) // y-coordinate of the center of the rectangle
    //         .attr("text-anchor", "middle") // center-align the text horizontally
    //         .attr("dominant-baseline", "middle") // center the text vertically
    //         .style("text-color","lightblue")
    //         .text("deed"); // set the text content 

    //         // owner1 append mortgage

    //         svg.append("text")
    //             .attr("x", box1x + 50) // x-coordinate of the center of the rectangle
    //             .attr("y", 170) // y-coordinate of the center of the rectangle
    //             .attr("text-anchor", "middle") // center-align the text horizontally
    //             .attr("dominant-baseline", "middle") // center the text vertically
    //             .style("text-color","lightblue")
    //             .text("mortgage"); // set the text content 

    //         svg.append("rect")
    //             .attr("x", mortgage1_x1) 
    //             .attr("y", 100)
    //             .attr("width", widthMortgage)
    //             .attr("height", heightRect)
    //             .attr("fill", colorMortgage) 
    //             .attr("rx", 10)
    //             .attr("ry",10)
    //             .attr("stroke", "black")
    //             .attr("stroke-width", 2)
    //             .on("click", () => { // onClick the button to the link 
    //                 // Define action on click for each rectangle
    //                 window.location.href = data[0].mortgage[0].book_page; // Navigate to the link with corresponding ID
    //             })
    //             .on('mouseover', () => {
    //                 d3.select(this)
    //                     .attr("fill", "red")
    //                 showTooltip( // Show deed details on mouseover
    //                     "mortgage: " + new Date(data[0].mortgage[0].date).getFullYear()
    //                 ) 
    //             })
    //             .on('mousemove', (event) => { // Adjust tooltip position based on mouse position
    //                 tooltip.style('top', (event.pageY - 10) + 'px')
    //                        .style('left', (event.pageX + 10) + 'px');
    //             })
    //             .on('mouseout', () => {// Hide tooltip on mouseout     
    //                 hideTooltip(); 
    //                 d3.select(this)
    //                     .attr("rx", borderRadiusOff)
    //                     .attr("ry", borderRadiusOff)
    //             });                                    
        
    //         svg.append("rect")
    //             .attr("x", mortgage1_x2) 
    //             .attr("y", 100)
    //             .attr("width", widthMortgage)
    //             .attr("height", heightRect)
    //             .attr("fill", colorMortgage) 
    //             .attr("rx", 10)
    //             .attr("ry",10)
    //             .attr("stroke", "black")
    //             .attr("stroke-width", 2)

    //         svg.append("rect")
    //             .attr("x", mortgage1_x3) 
    //             .attr("y", 100)
    //             .attr("width", widthMortgage)
    //             .attr("height", heightRect)
    //             .attr("fill", colorMortgage) 
    //             .attr("rx", 10)
    //             .attr("ry",10)
    //             .attr("stroke", "black")
    //             .attr("stroke-width", 2)

    //         svg.append("rect")
    //             .attr("x", mortgage1_x4) 
    //             .attr("y", 100)
    //             .attr("width", widthMortgage)
    //             .attr("height", heightRect)
    //             .attr("fill", colorMortgage) 
    //             .attr("rx", 10)
    //             .attr("ry",10)
    //             .attr("stroke", "black")
    //             .attr("stroke-width", 2)

    //         // discharge
    //         svg.append("rect")
    //             .attr("x", discharge1_x1) 
    //             .attr("y", 200)
    //             .attr("width", widthDischarge)
    //             .attr("height", heightRect)
    //             .attr("fill", colorDischarge) 
    //             .attr("rx", 10)
    //             .attr("ry",10)
    //             .attr("stroke", "black")
    //             .attr("stroke-width", 2)


    //     // append owner2         
    //     svg.append("rect")
    //         .attr("x", box2x) 
    //         .attr("y", 10)
    //         .attr("width", box2Width)
    //         .attr("height", heightRect)
    //         .attr("fill", "lightblue") 
    //         .attr("rx", 10)
    //         .attr("ry",10)
    //         .on("click", () => { // onClick the button to the link 
    //             // Define action on click for each rectangle
    //             window.location.href = data[0].deed.book_page; // Navigate to the link with corresponding ID
    //         })
    //         .on('mouseover', () => {
    //             showTooltip("owner: " + data[1].owner) // Show tooltip on mouseover
    //         })
    //         .on('mousemove', (event) => { // Adjust tooltip position based on mouse position
    //             tooltip.style('top', (event.pageY - 10) + 'px')
    //                    .style('left', (event.pageX + 10) + 'px');
    //         })
    //         .on('mouseout', () => hideTooltip()); // Hide tooltip on mouseout             
            

    //         // owner2 mortgage
    //         svg.append("rect")
    //             .attr("x", mortgage2_x1) 
    //             .attr("y", 100)
    //             .attr("width", widthMortgage)
    //             .attr("height", heightRect)
    //             .attr("fill", colorMortgage) 
    //             .attr("rx", 10)
    //             .attr("ry",10)
    //             .attr("stroke", "black")
    //             .attr("stroke-width", 2)
                  
    }, []);

    return (
        <div>
            <svg ref={svgRef} width={width} height={height}></svg>
            <div ref={tooltipRef}></div> {/* Render the tooltip */}
        </div>
    );
};

export default CreateDeedVisual;

