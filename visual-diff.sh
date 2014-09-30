#!/bin/bash

dimensions1=`identify $1|awk '{print $3}'`
width1=`echo $dimensions1|awk -Fx '{print $1}'`
height1=`echo $dimensions1|awk -Fx '{print $2}'`

dimensions2=`identify $2|awk '{print $3}'`
width2=`echo $dimensions2|awk -Fx '{print $1}'`
height2=`echo $dimensions2|awk -Fx '{print $2}'`

maxwidth=$([ $width1 -gt $width2 ] && echo $width1 || echo $width2)
maxheight=$([ $height1 -gt $height2 ] && echo $height1 || echo $height2)

mogrify -extent ${maxwidth}x${maxheight} $1
mogrify -extent ${maxwidth}x${maxheight} $2

compare $1 $2 /tmp/visual-diff.png

open /tmp/visual-diff.png