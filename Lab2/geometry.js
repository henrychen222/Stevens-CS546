// function checkIsProperNumber(length, width, height) {
//     if (length === undefined || typeof length !== "number") {
//         throw `${length || "provided variable"} is not a number`;
//     }

//     if (width === undefined || typeof width !== "number") {
//         throw `${width || "provided variable"} is not a number`;
//     }

//     if (typeof height === "undefined" || isNaN(height)) {
//         throw `${height || "provided variable"} is not a number`;
//     }

// }

//check each argument is provided and is a number
function check_if_provided_and_number(argument,argumentName) {
    if (argument === undefined) {
        throw `${argumentName || "provided variable"} is not provided`;
    }

    if (typeof argument !== "number"){
        throw `${argumentName || "provided variable"} is not a number`;
    }

}

// function proper_bounds(argument_range) {
//     if (argument_range <= 0) {
//         throw "invalid input argument";
//     }
// }

//check each arguments is within proper bounds
function proper_bounds(length, width, height,radius) {
    if (length <= 0) {
        throw "invalid length input";
    }

    if (width <= 0) {
        throw "invalid width input";
    }

    if (height <= 0) {
        throw "invalid height input";
    }

    if (radius <= 0) {
        throw "invalid radius input";
    }

}

module.exports = {
    description: "This is all functions need to be exported",
    volumeOfRectangularPrism: function(length, width, height) {

        check_if_provided_and_number(length, "length")
        check_if_provided_and_number(width, "width");
        check_if_provided_and_number(height, "height");
        proper_bounds(length, width, height);

        //calculate the Rectangular Prism volumn
        var volume_rectangularPrism = length * width * height;
        //keep the result only three decimals        
        volume_rectangularPrism = volume_rectangularPrism.toFixed(3);

        return volume_rectangularPrism;

    },
    surfaceAreaOfRectangularPrism: function(length, width, height) {

        check_if_provided_and_number(length, "length")
        check_if_provided_and_number(width, "width");
        check_if_provided_and_number(height, "height");
        proper_bounds(length, width, height);

        //calculate the Rectangular Prism surface area
        var surface_area_rectangular = (length * width + length * height + width * height) * 2;
        //keep the result only three decimals    
        surface_area_rectangular = surface_area_rectangular.toFixed(3);

        return surface_area_rectangular;

    },
    volumeOfSphere: (radius) => {
        check_if_provided_and_number(radius, "radius");
        proper_bounds(radius);
       
        //calculate the Sphere volumn
        var volume_sphere = (4 / 3) * Math.PI * Math.pow(radius, 3);
        //keep the result only three decimals
        volume_sphere = volume_sphere.toFixed(3);

        return volume_sphere;
    },
    surfaceAreaOfSphere: (radius) => {
        check_if_provided_and_number(radius, "radius");
        proper_bounds(radius);
        
        //calculate the surface area of the Sphere
        var surface_area_sphere = 4 * Math.PI * Math.pow(radius, 2);
        //keep only three decimals
        surface_area_sphere = surface_area_sphere.toFixed(3);

        return surface_area_sphere;

    }
};


