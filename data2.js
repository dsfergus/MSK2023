var netter_data = `{
	    "plates": [
            {"number": 500,
            "img": "Images/Plate500.png",
            "img_num":"Images/Plate500Num.png",
	        "structures":[
	            {"number":1, "name":"Anterior cruciate ligament"},
	            {"number":2, "name":"Lateral condyle of femur (articular surface)"},
	            {"number":3, "name":"Popliteus tendon"},
	            {"number":4, "name":"Fibular collateral ligament"},
	            {"number":5, "name":"Lateral meniscus"},
	            {"number":6, "name":"Transverse ligament of knee"},
	            {"number":7, "name":"Head of fibula"},
                {"number":8, "name": "Tubercle of iliotibial tract (Gerdy's tubercle)"},
                {"number":9, "name": "Posterior cruciate ligament"},
                {"number":10, "name": "Medial condyle of femur (articular surface)"},
                {"number": 11, "name": "Medial meniscus"},
                {"number": 12, "name": "Tibial collateral ligament (superficial and deep fibers"},
                {"number": 13, "name": "Medial condyle of tibia"},
                {"number": 14, "name": "Tibial tuberosity"},
                {"number": 15, "name": "Adductor tubercle on medial condyle of femur"},
                {"number": 16, "name": "Medial condyle of femur (articular surface)"},
                {"number": 17, "name": "Tibial collateral ligament (superficial and deep fibers)"},
                {"number": 18, "name": "Medial meniscus"},
                {"number": 19, "name": "Medial condyle of tibia"},
                {"number": 20, "name": "Posterior cruciate ligament"},
                {"number": 21, "name": "Anterior cruciate ligament"},
                {"number": 22, "name": "Posterior meniscofemoral ligament"},
                {"number": 23, "name": "Lateral condyle of femur (articular surface)"},
                {"number": 24, "name": "Popliteus tendon"},
                {"number": 25, "name": "Fibular collateral ligament"},
                {"number": 26, "name": "Lateral meniscus"},
                {"number": 27, "name": "Head of fibula"}
]
            },
{"number": 501,
"img": "Images/Plate501.png",
"img_num": "Images/Plate501Num.png",
	        "structures": [
                {"number": 1, "name": "Medial femoral condyle"},
                {"number": 2, "name": "Intercondylar eminence"},
                {"number": 3, "name": "Tibial plateau"},
                {"number": 4, "name": "Femur"},
                {"number": 5, "name": "Lateral femoral condyle"},
                {"number": 6, "name": "Tibial plateau"},
                {"number": 7, "name": "Fibula"},
                {"number": 8, "name": "Tibia"},
                {"number": 9, "name": "Semitendinosus muscle"},
                {"number": 10, "name": "Sartorius muscle"},
                {"number": 11, "name": "Semimembranosus muscle"},
                {"number": 12, "name": "Gracilis muscle"},
                {"number": 13, "name": "Medial head of gastrocnemius muscle (cut)"},
                {"number": 14, "name": "Medial subtendinous bursa of gastrocnemius muscle (open)"},
                {"number": 15, "name": "Oblique popliteal ligament"},
                {"number": 16, "name": "Tibial collateral ligament"},
                {"number": 17, "name": "Bursa of semimembranosus muscle"},
                {"number": 18, "name": "Semimembranosus tendon"},
                {"number": 19, "name": "Interosseous membrane"},
                {"number": 20, "name": "Tibia"},
                {"number": 21, "name": "Plantaris muscle (cut)"},
                {"number": 22, "name": "Iliotibial tract"},
                {"number": 23, "name": "Biceps femoris muscle"},
                {"number": 24, "name": "Lateral head of gastrocnemius muscle (cut and reflect superiorly and laterally"},
                {"number": 25, "name": "Lateral subtendinous bursa of gastrocnemius muscle"},
                {"number": 26, "name": "Fibular collateral ligament"},
                {"number": 27, "name": "Arcuate popliteal ligament"},
                {"number": 28, "name": "Biceps femoris tendon"},
                {"number": 29, "name": "Common fibular nerve"},
                {"number": 30, "name": "Popliteus muscle"},
                {"number": 31, "name": "Fibula"}
                ]
            }]
    }`;


var myObj = JSON.parse(netter_data);

for (var i = 0; i < myObj.plates.length; i++) {
    var temp_name = [];
    for( ii = 0; ii < myObj.plates[i].structures.length; ii++) {
        temp_name[ii] = myObj.plates[i].structures[ii].name;
    }
    temp_name.sort();
    myObj.plates[i].structures_sort_name = temp_name;
}