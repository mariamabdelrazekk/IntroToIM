function setup() { createCanvas(400, 500);
                  background(50,40,180);

// making small circle at the left an making it dark grey 
fill(50,50,40); circle(150,80,20);

//making rectangle under the circle that has the same fill as the circle 
fill(150,90,90); rect(160,140,40,20);

//making small cricle at the right and making it dark grey
fill(50,50,40); circle(210,80,20);

// circle at the middle and making it reddish brown. 
fill(150,90,90); circle(180,110,75);

// rectangle and making it larger and changing the fill.
fill(20,30,50); rect(140,160,80,80);

// small rectangles
fill(20,30,50); rect(120,160,20,20);
                  
fill(20,30,50); rect(220,160,20,20);

// making new rectangles and changing the fill
fill(80,80,80); rect(140,240,80,40);

rect(140,280,30,100); rect(190,280,30,100);

// making a small circles inside of the big circle and changing their colors accordingly

fill(0,0,0); circle(180,115,5);

fill(255,255,255); circle(165,100,10);

fill(255,255,255); circle(192,100,10);

fill(180,0,0); ellipse(180,130, 30, 10);
}

