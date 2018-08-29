angular.module('SabrinaInterviewApp').factory('ProductsService', function($http, $q){
//	['$http', '$q',
    var WALMART_API_URI = 'http://api.walmartlabs.com/v1/';
    var API_KEY = "shs3n5x4fn4qsev9nbatkmsy";
    
    
    var factory = {
    		getFirstPageOfProductsByCategory:getFirstPageOfProductsByCategory
    };

    return factory;

    function getFirstPageOfProductsByCategory(id){
    		
     return {
    	    "query": "books",
    	    "categoryId": "1334134",
    	    "sort": "relevance",
    	    "responseGroup": "base",
    	    "totalResults": 89,
    	    "start": 1,
    	    "numItems": 10,
    	    "items": [
    	        {
    	            "itemId": 53595316,
    	            "parentItemId": 53595316,
    	            "name": "Penguin Books-Johanna's Christmas Coloring Book",
    	            "msrp": 14.99,
    	            "salePrice": 10.4,
    	            "categoryPath": "Books/Teen & Young Adult Books/Games & Activities/General",
    	            "shortDescription": "From the creator of the worldwide bestsellers Secret Garden and Lost Ocean, a beautiful new adult coloring book, printed on ivory paper and featuring delicate tangles of holly and ivy, bauble-laden Christmas trees, and mountains of exquisitely wrapped gifts",
    	            "longDescription": "Penguin Books-Johanna's Christmas Coloring Book",
    	            "thumbnailImage": "https://i5.walmartimages.com/asr/eaa835eb-475a-4811-a57e-da1785744a74_1.b11e851ac5a9bb075a3859a2e1f15232.jpeg?odnHeight=100&odnWidth=100&odnBg=FFFFFF",
    	            "mediumImage": "https://i5.walmartimages.com/asr/eaa835eb-475a-4811-a57e-da1785744a74_1.b11e851ac5a9bb075a3859a2e1f15232.jpeg?odnHeight=180&odnWidth=180&odnBg=FFFFFF",
    	            "largeImage": "https://i5.walmartimages.com/asr/eaa835eb-475a-4811-a57e-da1785744a74_1.b11e851ac5a9bb075a3859a2e1f15232.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF",
    	            "productTrackingUrl": "http://linksynergy.walmart.com/fs-bin/click?id=|LSNID|&offerid=223073.7200&type=14&catid=8&subid=0&hid=7200&tmpid=1082&RD_PARM1=https%253A%252F%252Fwww.walmart.com%252Fip%252FPenguin-Books-Johanna-s-Christmas-Coloring-Book%252F53595316%253Faffp1%253Du_dNiS751TiCoT9_TTvDoXAHSu2GOWuwggXKOnWyauI%2526affilsrc%253Dapi",
    	            "standardShipRate": 5.99,
    	            "marketplace": false,
    	            "productUrl": "http://c.affil.walmart.com/t/api02?l=https%3A%2F%2Fwww.walmart.com%2Fip%2FPenguin-Books-Johanna-s-Christmas-Coloring-Book%2F53595316%3Faffp1%3Du_dNiS751TiCoT9_TTvDoXAHSu2GOWuwggXKOnWyauI%26affilsrc%3Dapi%26veh%3Daff%26wmlspartner%3Dreadonlyapi",
    	            "customerRating": "4.8",
    	            "numReviews": 5,
    	            "customerRatingImage": "http://i2.walmartimages.com/i/CustRating/4_8.gif",
    	            "categoryNode": "3920_1068785_6743200",
    	            "rhid": "32782",
    	            "bundle": false,
    	            "stock": "Available",
    	            "addToCartUrl": "http://c.affil.walmart.com/t/api02?l=http%3A%2F%2Faffil.walmart.com%2Fcart%2FaddToCart%3Fitems%3D53595316%7C1%26affp1%3Du_dNiS751TiCoT9_TTvDoXAHSu2GOWuwggXKOnWyauI%26affilsrc%3Dapi%26veh%3Daff%26wmlspartner%3Dreadonlyapi",
    	            "affiliateAddToCartUrl": "http://linksynergy.walmart.com/fs-bin/click?id=|LSNID|&offerid=223073.7200&type=14&catid=8&subid=0&hid=7200&tmpid=1082&RD_PARM1=http%253A%252F%252Faffil.walmart.com%252Fcart%252FaddToCart%253Fitems%253D53595316%257C1%2526affp1%253Du_dNiS751TiCoT9_TTvDoXAHSu2GOWuwggXKOnWyauI%2526affilsrc%253Dapi",
    	            "imageEntities": [
    	                {
    	                    "thumbnailImage": "https://i5.walmartimages.com/asr/f6892af6-b086-49fe-9db5-2651341014f8_1.1844141cc97d96b9bf88020270186ad9.jpeg?odnHeight=100&odnWidth=100&odnBg=FFFFFF",
    	                    "mediumImage": "https://i5.walmartimages.com/asr/f6892af6-b086-49fe-9db5-2651341014f8_1.1844141cc97d96b9bf88020270186ad9.jpeg?odnHeight=180&odnWidth=180&odnBg=FFFFFF",
    	                    "largeImage": "https://i5.walmartimages.com/asr/f6892af6-b086-49fe-9db5-2651341014f8_1.1844141cc97d96b9bf88020270186ad9.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF",
    	                    "entityType": "SECONDARY"
    	                },
    	                {
    	                    "thumbnailImage": "https://i5.walmartimages.com/asr/eaa835eb-475a-4811-a57e-da1785744a74_1.b11e851ac5a9bb075a3859a2e1f15232.jpeg?odnHeight=100&odnWidth=100&odnBg=FFFFFF",
    	                    "mediumImage": "https://i5.walmartimages.com/asr/eaa835eb-475a-4811-a57e-da1785744a74_1.b11e851ac5a9bb075a3859a2e1f15232.jpeg?odnHeight=180&odnWidth=180&odnBg=FFFFFF",
    	                    "largeImage": "https://i5.walmartimages.com/asr/eaa835eb-475a-4811-a57e-da1785744a74_1.b11e851ac5a9bb075a3859a2e1f15232.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF",
    	                    "entityType": "PRIMARY"
    	                }
    	            ],
    	            "offerType": "ONLINE_AND_STORE",
    	            "isTwoDayShippingEligible": true,
    	            "availableOnline": true
    	        },
    	        {
    	            "itemId": 52100552,
    	            "parentItemId": 52100552,
    	            "name": "Magical Jungle : An Inky Expedition and Coloring Book for Adults",
    	            "salePrice": 17.3,
    	            "categoryPath": "Books/Walmart Books Best Sellers/Young Adult Books Top 100",
    	            "shortDescription": "Details Coming Soon",
    	            "longDescription": "&lt;b&gt;From the internationally bestselling creator of&nbsp;&lt;i&gt;Lost Ocean&lt;/i&gt; and &lt;i&gt;Secret Garden&lt;/i&gt; comes a beautiful new adult coloring book that takes you on a wondrous expedition through the jungle&lt;/b&gt;&lt;br&gt;&nbsp;&lt;br&gt;Follow ink evangelist Johanna Basford down an inky trail through the Magical Jungle and discover a forgotten world of flora and fauna just waiting to be colored in this new coloring book for adults. Through intricate pen and ink illustrations, color-inners of all ages are invited to explore an exotic rainforest teeming with creatures large and small. Encounter speckled tree frogs and dainty hummingbirds, prowling tigers and playful monkeys. Let your imagination run wild in the leafy treetop canopy or find yourself drawn to the delicate world of sensational blossoms and tropical plants below. &lt;br&gt;&lt;br&gt;Now printed on specially selected ivory paper. This paper has been specifically created for Johanna Basford&rsquo;s coloring books. It has a medium tooth which is perfect for creating beautiful colored pencil effects or chalk pastel backgrounds but also wonderful for pens, which will glide effortlessly over its surface.&lt;br&gt;&nbsp;&lt;br&gt;&ldquo;The colorists have a queen, and her name is Johanna Basford.&rdquo; &mdash;&lt;i&gt;New York Magazine&lt;/i&gt;&lt;br&gt;&nbsp;&lt;br&gt;&ldquo;Consider trading in your yoga mat for a set of markers and peruse the gorgeous gardens of Basford&rsquo;s imagination.&rdquo; &mdash;&lt;i&gt;The&lt;/i&gt;&nbsp;&lt;i&gt;Huffington Post&lt;/i&gt;",
    	            "thumbnailImage": "https://i5.walmartimages.com/asr/dd09d802-6d82-4a58-93b9-e189eca6735c_2.587196702e4b3e45b9d64a31e2f2c95b.jpeg?odnHeight=100&odnWidth=100&odnBg=FFFFFF",
    	            "mediumImage": "https://i5.walmartimages.com/asr/dd09d802-6d82-4a58-93b9-e189eca6735c_2.587196702e4b3e45b9d64a31e2f2c95b.jpeg?odnHeight=180&odnWidth=180&odnBg=FFFFFF",
    	            "largeImage": "https://i5.walmartimages.com/asr/dd09d802-6d82-4a58-93b9-e189eca6735c_2.587196702e4b3e45b9d64a31e2f2c95b.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF",
    	            "productTrackingUrl": "http://linksynergy.walmart.com/fs-bin/click?id=|LSNID|&offerid=223073.7200&type=14&catid=8&subid=0&hid=7200&tmpid=1082&RD_PARM1=https%253A%252F%252Fwww.walmart.com%252Fip%252FMagical-Jungle-An-Inky-Expedition-and-Coloring-Book-for-Adults%252F52100552%253Faffp1%253Du_dNiS751TiCoT9_TTvDoXAHSu2GOWuwggXKOnWyauI%2526affilsrc%253Dapi",
    	            "standardShipRate": 5.99,
    	            "marketplace": false,
    	            "productUrl": "http://c.affil.walmart.com/t/api02?l=https%3A%2F%2Fwww.walmart.com%2Fip%2FMagical-Jungle-An-Inky-Expedition-and-Coloring-Book-for-Adults%2F52100552%3Faffp1%3Du_dNiS751TiCoT9_TTvDoXAHSu2GOWuwggXKOnWyauI%26affilsrc%3Dapi%26veh%3Daff%26wmlspartner%3Dreadonlyapi",
    	            "customerRating": "5.0",
    	            "numReviews": 3,
    	            "customerRatingImage": "http://i2.walmartimages.com/i/CustRating/5.gif",
    	            "categoryNode": "3920_1057224_6231299",
    	            "rhid": "32769",
    	            "bundle": false,
    	            "stock": "Available",
    	            "addToCartUrl": "http://c.affil.walmart.com/t/api02?l=http%3A%2F%2Faffil.walmart.com%2Fcart%2FaddToCart%3Fitems%3D52100552%7C1%26affp1%3Du_dNiS751TiCoT9_TTvDoXAHSu2GOWuwggXKOnWyauI%26affilsrc%3Dapi%26veh%3Daff%26wmlspartner%3Dreadonlyapi",
    	            "affiliateAddToCartUrl": "http://linksynergy.walmart.com/fs-bin/click?id=|LSNID|&offerid=223073.7200&type=14&catid=8&subid=0&hid=7200&tmpid=1082&RD_PARM1=http%253A%252F%252Faffil.walmart.com%252Fcart%252FaddToCart%253Fitems%253D52100552%257C1%2526affp1%253Du_dNiS751TiCoT9_TTvDoXAHSu2GOWuwggXKOnWyauI%2526affilsrc%253Dapi",
    	            "imageEntities": [
    	                {
    	                    "thumbnailImage": "https://i5.walmartimages.com/asr/9421a20f-215a-4363-beeb-43505a0ebc99_1.e1a893ec7ed195e0e3e744c51a443f60.jpeg?odnHeight=100&odnWidth=100&odnBg=FFFFFF",
    	                    "mediumImage": "https://i5.walmartimages.com/asr/9421a20f-215a-4363-beeb-43505a0ebc99_1.e1a893ec7ed195e0e3e744c51a443f60.jpeg?odnHeight=180&odnWidth=180&odnBg=FFFFFF",
    	                    "largeImage": "https://i5.walmartimages.com/asr/9421a20f-215a-4363-beeb-43505a0ebc99_1.e1a893ec7ed195e0e3e744c51a443f60.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF",
    	                    "entityType": "SECONDARY"
    	                },
    	                {
    	                    "thumbnailImage": "https://i5.walmartimages.com/asr/dd09d802-6d82-4a58-93b9-e189eca6735c_2.587196702e4b3e45b9d64a31e2f2c95b.jpeg?odnHeight=100&odnWidth=100&odnBg=FFFFFF",
    	                    "mediumImage": "https://i5.walmartimages.com/asr/dd09d802-6d82-4a58-93b9-e189eca6735c_2.587196702e4b3e45b9d64a31e2f2c95b.jpeg?odnHeight=180&odnWidth=180&odnBg=FFFFFF",
    	                    "largeImage": "https://i5.walmartimages.com/asr/dd09d802-6d82-4a58-93b9-e189eca6735c_2.587196702e4b3e45b9d64a31e2f2c95b.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF",
    	                    "entityType": "PRIMARY"
    	                }
    	            ],
    	            "offerType": "ONLINE_ONLY",
    	            "availableOnline": true
    	        },
    	        {
    	            "itemId": 45688252,
    	            "parentItemId": 45688252,
    	            "name": "Vive Le Color! Japan (Adult Coloring Book) : Color In: De-Stress (72 Tear-Out Pages)",
    	            "msrp": 8.94,
    	            "salePrice": 13.05,
    	            "categoryPath": "Books/Crafts & Hobbies Books/Game & Activity Books/Board Game Books",
    	            "shortDescription": "Details Coming Soon",
    	            "longDescription": "VIVE LE COLOR: JAPAN (CO?ORING BOOK): COLOR IN; DE",
    	            "thumbnailImage": "https://i5.walmartimages.com/asr/71664dc5-048a-4791-be21-827da6740f7c_1.ea48d69265fe41e3e903ac644d69d48b.jpeg?odnHeight=100&odnWidth=100&odnBg=FFFFFF",
    	            "mediumImage": "https://i5.walmartimages.com/asr/71664dc5-048a-4791-be21-827da6740f7c_1.ea48d69265fe41e3e903ac644d69d48b.jpeg?odnHeight=180&odnWidth=180&odnBg=FFFFFF",
    	            "largeImage": "https://i5.walmartimages.com/asr/71664dc5-048a-4791-be21-827da6740f7c_1.ea48d69265fe41e3e903ac644d69d48b.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF",
    	            "productTrackingUrl": "http://linksynergy.walmart.com/fs-bin/click?id=|LSNID|&offerid=223073.7200&type=14&catid=8&subid=0&hid=7200&tmpid=1082&RD_PARM1=https%253A%252F%252Fwww.walmart.com%252Fip%252FVive-Le-Color-Japan-Adult-Coloring-Book-Color-In-De-Stress-72-Tear-Out-Pages%252F45688252%253Faffp1%253Du_dNiS751TiCoT9_TTvDoXAHSu2GOWuwggXKOnWyauI%2526affilsrc%253Dapi",
    	            "standardShipRate": 0,
    	            "marketplace": true,
    	            "sellerInfo": "Speedy Hen LLC",
    	            "productUrl": "http://c.affil.walmart.com/t/api02?l=https%3A%2F%2Fwww.walmart.com%2Fip%2FVive-Le-Color-Japan-Adult-Coloring-Book-Color-In-De-Stress-72-Tear-Out-Pages%2F45688252%3Faffp1%3Du_dNiS751TiCoT9_TTvDoXAHSu2GOWuwggXKOnWyauI%26affilsrc%3Dapi%26veh%3Daff%26wmlspartner%3Dreadonlyapi",
    	            "customerRating": "5.0",
    	            "numReviews": 2,
    	            "customerRatingImage": "http://i2.walmartimages.com/i/CustRating/5.gif",
    	            "categoryNode": "3920_582361_9999446",
    	            "rhid": "32763",
    	            "bundle": false,
    	            "stock": "Available",
    	            "addToCartUrl": "http://c.affil.walmart.com/t/api02?l=http%3A%2F%2Faffil.walmart.com%2Fcart%2FaddToCart%3Fitems%3D45688252%7C1%26affp1%3Du_dNiS751TiCoT9_TTvDoXAHSu2GOWuwggXKOnWyauI%26affilsrc%3Dapi%26veh%3Daff%26wmlspartner%3Dreadonlyapi",
    	            "affiliateAddToCartUrl": "http://linksynergy.walmart.com/fs-bin/click?id=|LSNID|&offerid=223073.7200&type=14&catid=8&subid=0&hid=7200&tmpid=1082&RD_PARM1=http%253A%252F%252Faffil.walmart.com%252Fcart%252FaddToCart%253Fitems%253D45688252%257C1%2526affp1%253Du_dNiS751TiCoT9_TTvDoXAHSu2GOWuwggXKOnWyauI%2526affilsrc%253Dapi",
    	            "freeShippingOver35Dollars": false,
    	            "imageEntities": [
    	                {
    	                    "thumbnailImage": "https://i5.walmartimages.com/asr/ee63271c-bc54-42ff-a710-119fba94c0dd_1.0829dbdbd0f3df4b0bee241dbafe950e.jpeg?odnHeight=100&odnWidth=100&odnBg=FFFFFF",
    	                    "mediumImage": "https://i5.walmartimages.com/asr/ee63271c-bc54-42ff-a710-119fba94c0dd_1.0829dbdbd0f3df4b0bee241dbafe950e.jpeg?odnHeight=180&odnWidth=180&odnBg=FFFFFF",
    	                    "largeImage": "https://i5.walmartimages.com/asr/ee63271c-bc54-42ff-a710-119fba94c0dd_1.0829dbdbd0f3df4b0bee241dbafe950e.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF",
    	                    "entityType": "SECONDARY"
    	                },
    	                {
    	                    "thumbnailImage": "https://i5.walmartimages.com/asr/71664dc5-048a-4791-be21-827da6740f7c_1.ea48d69265fe41e3e903ac644d69d48b.jpeg?odnHeight=100&odnWidth=100&odnBg=FFFFFF",
    	                    "mediumImage": "https://i5.walmartimages.com/asr/71664dc5-048a-4791-be21-827da6740f7c_1.ea48d69265fe41e3e903ac644d69d48b.jpeg?odnHeight=180&odnWidth=180&odnBg=FFFFFF",
    	                    "largeImage": "https://i5.walmartimages.com/asr/71664dc5-048a-4791-be21-827da6740f7c_1.ea48d69265fe41e3e903ac644d69d48b.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF",
    	                    "entityType": "PRIMARY"
    	                }
    	            ],
    	            "offerType": "ONLINE_ONLY",
    	            "availableOnline": true
    	        },
    	        {
    	            "itemId": 17614581,
    	            "parentItemId": 17614581,
    	            "name": "Arabic Floral Patterns Coloring Book",
    	            "msrp": 3.99,
    	            "salePrice": 2.74,
    	            "categoryPath": "Books/Children's & Kids' Books/Children's Activity Books",
    	            "shortDescription": "Thirty illustrations feature dynamic combinations of interlocking floral designs, rendered in the distinctive style of Islamic art. Colorists and crafters alike will be inspired by the hypnotic appeal of these original motifs.",
    	            "longDescription": "Arabic Floral Patterns Coloring Book",
    	            "thumbnailImage": "https://i5.walmartimages.com/asr/2dc212e1-d6b0-483f-adc5-9904cd25c31d_1.1ae981ee5f8ff459fee75109ebec54bb.jpeg?odnHeight=100&odnWidth=100&odnBg=FFFFFF",
    	            "mediumImage": "https://i5.walmartimages.com/asr/2dc212e1-d6b0-483f-adc5-9904cd25c31d_1.1ae981ee5f8ff459fee75109ebec54bb.jpeg?odnHeight=180&odnWidth=180&odnBg=FFFFFF",
    	            "largeImage": "https://i5.walmartimages.com/asr/2dc212e1-d6b0-483f-adc5-9904cd25c31d_1.1ae981ee5f8ff459fee75109ebec54bb.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF",
    	            "productTrackingUrl": "http://linksynergy.walmart.com/fs-bin/click?id=|LSNID|&offerid=223073.7200&type=14&catid=8&subid=0&hid=7200&tmpid=1082&RD_PARM1=https%253A%252F%252Fwww.walmart.com%252Fip%252FArabic-Floral-Patterns-Coloring-Book%252F17614581%253Faffp1%253Du_dNiS751TiCoT9_TTvDoXAHSu2GOWuwggXKOnWyauI%2526affilsrc%253Dapi",
    	            "standardShipRate": 5.99,
    	            "marketplace": false,
    	            "productUrl": "http://c.affil.walmart.com/t/api02?l=https%3A%2F%2Fwww.walmart.com%2Fip%2FArabic-Floral-Patterns-Coloring-Book%2F17614581%3Faffp1%3Du_dNiS751TiCoT9_TTvDoXAHSu2GOWuwggXKOnWyauI%26affilsrc%3Dapi%26veh%3Daff%26wmlspartner%3Dreadonlyapi",
    	            "customerRating": "2.5",
    	            "numReviews": 2,
    	            "customerRatingImage": "http://i2.walmartimages.com/i/CustRating/2_5.gif",
    	            "categoryNode": "3920_582053_1099163",
    	            "rhid": "32822",
    	            "bundle": false,
    	            "stock": "Available",
    	            "addToCartUrl": "http://c.affil.walmart.com/t/api02?l=http%3A%2F%2Faffil.walmart.com%2Fcart%2FaddToCart%3Fitems%3D17614581%7C1%26affp1%3Du_dNiS751TiCoT9_TTvDoXAHSu2GOWuwggXKOnWyauI%26affilsrc%3Dapi%26veh%3Daff%26wmlspartner%3Dreadonlyapi",
    	            "affiliateAddToCartUrl": "http://linksynergy.walmart.com/fs-bin/click?id=|LSNID|&offerid=223073.7200&type=14&catid=8&subid=0&hid=7200&tmpid=1082&RD_PARM1=http%253A%252F%252Faffil.walmart.com%252Fcart%252FaddToCart%253Fitems%253D17614581%257C1%2526affp1%253Du_dNiS751TiCoT9_TTvDoXAHSu2GOWuwggXKOnWyauI%2526affilsrc%253Dapi",
    	            "giftOptions": {
    	                "allowGiftWrap": false,
    	                "allowGiftMessage": false,
    	                "allowGiftReceipt": false
    	            },
    	            "imageEntities": [
    	                {
    	                    "thumbnailImage": "https://i5.walmartimages.com/asr/2dc212e1-d6b0-483f-adc5-9904cd25c31d_1.1ae981ee5f8ff459fee75109ebec54bb.jpeg?odnHeight=100&odnWidth=100&odnBg=FFFFFF",
    	                    "mediumImage": "https://i5.walmartimages.com/asr/2dc212e1-d6b0-483f-adc5-9904cd25c31d_1.1ae981ee5f8ff459fee75109ebec54bb.jpeg?odnHeight=180&odnWidth=180&odnBg=FFFFFF",
    	                    "largeImage": "https://i5.walmartimages.com/asr/2dc212e1-d6b0-483f-adc5-9904cd25c31d_1.1ae981ee5f8ff459fee75109ebec54bb.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF",
    	                    "entityType": "PRIMARY"
    	                }
    	            ],
    	            "offerType": "ONLINE_ONLY",
    	            "isTwoDayShippingEligible": true,
    	            "availableOnline": true
    	        },
    	        {
    	            "itemId": 47141322,
    	            "parentItemId": 47141322,
    	            "name": "Inspire Bible NLT : The Bible for Coloring & Creative Journaling",
    	            "salePrice": 39.57,
    	            "categoryPath": "Books/Religion & Spirituality Books/Christian Books & Bibles/Bibles/New Living Translation",
    	            "shortDescription": "Details Coming Soon",
    	            "longDescription": "&lt;b&gt;2017 Christian Retailing&rsquo;s BEST Award Winner (Bible: Journaling category)&lt;br&gt;2017 ECPA Christian Book Award Finalist (Bibles category)&lt;br&gt;The &lt;i&gt;Inspire Bible&lt;/i&gt; was ECPA&rsquo;s Bestselling Bible of 2016!&lt;/b&gt;&lt;br&gt;&lt;i&gt;Inspire&lt;/i&gt; is a single-column, wide-margin New Living Translation Bible that will be a cherished resource for coloring and creative art journaling. It is the first Bible of its kind&mdash;with over 400 beautiful line-art illustrations spread throughout the Bible. Full-page and partial-page Scripture art is attractively displayed throughout the Bible, and the illustrations can be colored in to make each Bible unique, colorful, and customizable. Every page of Scripture has two-inch-wide margins, with either Scripture line-art or ruled space for writing notes and reflections, or to draw and create. The generous 8.65-point font ensures optimal readability, and quality cream Bible paper is great for creative art journaling. &lt;i&gt;Inspire&lt;/i&gt; is available in the popular New Living Translation, and is designed uniquely to appeal to art-journaling and adult coloring book enthusiasts. &lt;ul&gt;&lt;li&gt;Softcover editions have &lt;i&gt;Inspire&lt;/i&gt; foiled in metallic blue on an attractive coloring-book-style cover, plus extra hits of foil to embellish the flowers and leaves.&lt;/li&gt;&lt;li&gt;Deluxe Hardcover editions feature a lovely, aquamarine LeatherLike over board, with beautifully-designed full-color page edges, a matching ribbon, and an elastic band closure.&lt;/li&gt;&lt;li&gt;Deluxe LeatherLike editions feature a beautiful, vintage floral printed silky LeatherLike over flexible board, with matching aquamarine-patterned page edges, a matching ribbon, and a Smyth-sewn durable binding.&lt;/li&gt;&lt;/ul&gt;",
    	            "thumbnailImage": "https://i5.walmartimages.com/asr/26d361a7-be85-472e-963a-55298bcfa33c_1.4bbd2261eefca30c73697e5087f26372.jpeg?odnHeight=100&odnWidth=100&odnBg=FFFFFF",
    	            "mediumImage": "https://i5.walmartimages.com/asr/26d361a7-be85-472e-963a-55298bcfa33c_1.4bbd2261eefca30c73697e5087f26372.jpeg?odnHeight=180&odnWidth=180&odnBg=FFFFFF",
    	            "largeImage": "https://i5.walmartimages.com/asr/26d361a7-be85-472e-963a-55298bcfa33c_1.4bbd2261eefca30c73697e5087f26372.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF",
    	            "productTrackingUrl": "http://linksynergy.walmart.com/fs-bin/click?id=|LSNID|&offerid=223073.7200&type=14&catid=8&subid=0&hid=7200&tmpid=1082&RD_PARM1=https%253A%252F%252Fwww.walmart.com%252Fip%252FInspire-Bible-NLT-The-Bible-for-Coloring-Creative-Journaling%252F47141322%253Faffp1%253Du_dNiS751TiCoT9_TTvDoXAHSu2GOWuwggXKOnWyauI%2526affilsrc%253Dapi",
    	            "standardShipRate": 0,
    	            "marketplace": true,
    	            "sellerInfo": "thebookpros",
    	            "productUrl": "http://c.affil.walmart.com/t/api02?l=https%3A%2F%2Fwww.walmart.com%2Fip%2FInspire-Bible-NLT-The-Bible-for-Coloring-Creative-Journaling%2F47141322%3Faffp1%3Du_dNiS751TiCoT9_TTvDoXAHSu2GOWuwggXKOnWyauI%26affilsrc%3Dapi%26veh%3Daff%26wmlspartner%3Dreadonlyapi",
    	            "customerRating": "5.0",
    	            "numReviews": 1,
    	            "customerRatingImage": "http://i2.walmartimages.com/i/CustRating/5.gif",
    	            "categoryNode": "3920_1987289_582374",
    	            "rhid": "32779",
    	            "bundle": false,
    	            "stock": "Available",
    	            "addToCartUrl": "http://c.affil.walmart.com/t/api02?l=http%3A%2F%2Faffil.walmart.com%2Fcart%2FaddToCart%3Fitems%3D47141322%7C1%26affp1%3Du_dNiS751TiCoT9_TTvDoXAHSu2GOWuwggXKOnWyauI%26affilsrc%3Dapi%26veh%3Daff%26wmlspartner%3Dreadonlyapi",
    	            "affiliateAddToCartUrl": "http://linksynergy.walmart.com/fs-bin/click?id=|LSNID|&offerid=223073.7200&type=14&catid=8&subid=0&hid=7200&tmpid=1082&RD_PARM1=http%253A%252F%252Faffil.walmart.com%252Fcart%252FaddToCart%253Fitems%253D47141322%257C1%2526affp1%253Du_dNiS751TiCoT9_TTvDoXAHSu2GOWuwggXKOnWyauI%2526affilsrc%253Dapi",
    	            "freeShippingOver35Dollars": false,
    	            "imageEntities": [
    	                {
    	                    "thumbnailImage": "https://i5.walmartimages.com/asr/26d361a7-be85-472e-963a-55298bcfa33c_1.4bbd2261eefca30c73697e5087f26372.jpeg?odnHeight=100&odnWidth=100&odnBg=FFFFFF",
    	                    "mediumImage": "https://i5.walmartimages.com/asr/26d361a7-be85-472e-963a-55298bcfa33c_1.4bbd2261eefca30c73697e5087f26372.jpeg?odnHeight=180&odnWidth=180&odnBg=FFFFFF",
    	                    "largeImage": "https://i5.walmartimages.com/asr/26d361a7-be85-472e-963a-55298bcfa33c_1.4bbd2261eefca30c73697e5087f26372.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF",
    	                    "entityType": "PRIMARY"
    	                }
    	            ],
    	            "offerType": "ONLINE_ONLY",
    	            "availableOnline": true
    	        },
    	        {
    	            "itemId": 25672969,
    	            "parentItemId": 25672969,
    	            "name": "Geometrical Design Coloring Book",
    	            "salePrice": 4.99,
    	            "categoryPath": "Books/Crafts & Hobbies Books/Papercrafts Crafts & Hobbies Books",
    	            "shortDescription": "Geometrical Design Coloring Book...",
    	            "longDescription": "Geometrical Design Coloring Book",
    	            "thumbnailImage": "https://i5.walmartimages.com/asr/bdfe55a2-ac83-4850-b644-fc342028507e_1.4a39e419e8bdf43445d1cabc2bdce7cc.jpeg?odnHeight=100&odnWidth=100&odnBg=FFFFFF",
    	            "mediumImage": "https://i5.walmartimages.com/asr/bdfe55a2-ac83-4850-b644-fc342028507e_1.4a39e419e8bdf43445d1cabc2bdce7cc.jpeg?odnHeight=180&odnWidth=180&odnBg=FFFFFF",
    	            "largeImage": "https://i5.walmartimages.com/asr/bdfe55a2-ac83-4850-b644-fc342028507e_1.4a39e419e8bdf43445d1cabc2bdce7cc.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF",
    	            "productTrackingUrl": "http://linksynergy.walmart.com/fs-bin/click?id=|LSNID|&offerid=223073.7200&type=14&catid=8&subid=0&hid=7200&tmpid=1082&RD_PARM1=https%253A%252F%252Fwww.walmart.com%252Fip%252FGeometrical-Design-Coloring-Book%252F25672969%253Faffp1%253Du_dNiS751TiCoT9_TTvDoXAHSu2GOWuwggXKOnWyauI%2526affilsrc%253Dapi",
    	            "standardShipRate": 5.99,
    	            "productUrl": "http://c.affil.walmart.com/t/api02?l=https%3A%2F%2Fwww.walmart.com%2Fip%2FGeometrical-Design-Coloring-Book%2F25672969%3Faffp1%3Du_dNiS751TiCoT9_TTvDoXAHSu2GOWuwggXKOnWyauI%26affilsrc%3Dapi%26veh%3Daff%26wmlspartner%3Dreadonlyapi",
    	            "customerRating": "4.75",
    	            "numReviews": 4,
    	            "customerRatingImage": "http://i2.walmartimages.com/i/CustRating/4_8.gif",
    	            "categoryNode": "3920_582361_7691206",
    	            "rhid": "32769",
    	            "bundle": false,
    	            "stock": "Available",
    	            "addToCartUrl": "http://c.affil.walmart.com/t/api02?l=http%3A%2F%2Faffil.walmart.com%2Fcart%2FaddToCart%3Fitems%3D25672969%7C1%26affp1%3Du_dNiS751TiCoT9_TTvDoXAHSu2GOWuwggXKOnWyauI%26affilsrc%3Dapi%26veh%3Daff%26wmlspartner%3Dreadonlyapi",
    	            "affiliateAddToCartUrl": "http://linksynergy.walmart.com/fs-bin/click?id=|LSNID|&offerid=223073.7200&type=14&catid=8&subid=0&hid=7200&tmpid=1082&RD_PARM1=http%253A%252F%252Faffil.walmart.com%252Fcart%252FaddToCart%253Fitems%253D25672969%257C1%2526affp1%253Du_dNiS751TiCoT9_TTvDoXAHSu2GOWuwggXKOnWyauI%2526affilsrc%253Dapi",
    	            "giftOptions": {
    	                "allowGiftWrap": false,
    	                "allowGiftMessage": false,
    	                "allowGiftReceipt": false
    	            },
    	            "imageEntities": [
    	                {
    	                    "thumbnailImage": "https://i5.walmartimages.com/asr/e5202699-468a-4709-8609-7251de34863a_1.50ed3540cc647d58620e5d0d109d55c9.jpeg?odnHeight=100&odnWidth=100&odnBg=FFFFFF",
    	                    "mediumImage": "https://i5.walmartimages.com/asr/e5202699-468a-4709-8609-7251de34863a_1.50ed3540cc647d58620e5d0d109d55c9.jpeg?odnHeight=180&odnWidth=180&odnBg=FFFFFF",
    	                    "largeImage": "https://i5.walmartimages.com/asr/e5202699-468a-4709-8609-7251de34863a_1.50ed3540cc647d58620e5d0d109d55c9.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF",
    	                    "entityType": "SECONDARY"
    	                },
    	                {
    	                    "thumbnailImage": "https://i5.walmartimages.com/asr/bdfe55a2-ac83-4850-b644-fc342028507e_1.4a39e419e8bdf43445d1cabc2bdce7cc.jpeg?odnHeight=100&odnWidth=100&odnBg=FFFFFF",
    	                    "mediumImage": "https://i5.walmartimages.com/asr/bdfe55a2-ac83-4850-b644-fc342028507e_1.4a39e419e8bdf43445d1cabc2bdce7cc.jpeg?odnHeight=180&odnWidth=180&odnBg=FFFFFF",
    	                    "largeImage": "https://i5.walmartimages.com/asr/bdfe55a2-ac83-4850-b644-fc342028507e_1.4a39e419e8bdf43445d1cabc2bdce7cc.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF",
    	                    "entityType": "PRIMARY"
    	                }
    	            ],
    	            "offerType": "ONLINE_ONLY",
    	            "isTwoDayShippingEligible": true,
    	            "availableOnline": true
    	        },
    	        {
    	            "itemId": 52664116,
    	            "parentItemId": 52664116,
    	            "name": "Notebook Doodles Peace, Love, and Music",
    	            "msrp": 6.7,
    	            "salePrice": 6.3,
    	            "upc": "023863055536",
    	            "categoryPath": "Books/Crafts & Hobbies Books/Game & Activity Books/General Games & Activity Books",
    	            "shortDescription": "&quot;Discover 30 groovy Notebook Doodle designs to color with watercolors, colored pencils, markers, crayons, or gel pens. &quot;",
    	            "longDescription": "&lt;p&gt;Inside this fun and engaging coloring book for 'tweens, youthful readers will discover 30 mind-blowing coloring activities inspired by the psychedelic 60's. They will also find instructions on basic coloring techniques, 20 inspiring color palettes, 8 pages of colored examples, and inspiring quotes to go with every design. Watercolors, colored pencils, markers, crayons, and gel pens will all look stunning on high-quality, extra-thick paper. Each one-sided page is perforated, so when it's finished, it can easily be removed to hang up or give as a gift.&lt;/p&gt;",
    	            "thumbnailImage": "https://i5.walmartimages.com/asr/ff0fd615-6cd4-4327-af4d-c417ea38cdab_1.d8528d66e08df2a39303501961e794e6.jpeg?odnHeight=100&odnWidth=100&odnBg=FFFFFF",
    	            "mediumImage": "https://i5.walmartimages.com/asr/ff0fd615-6cd4-4327-af4d-c417ea38cdab_1.d8528d66e08df2a39303501961e794e6.jpeg?odnHeight=180&odnWidth=180&odnBg=FFFFFF",
    	            "largeImage": "https://i5.walmartimages.com/asr/ff0fd615-6cd4-4327-af4d-c417ea38cdab_1.d8528d66e08df2a39303501961e794e6.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF",
    	            "productTrackingUrl": "http://linksynergy.walmart.com/fs-bin/click?id=|LSNID|&offerid=223073.7200&type=14&catid=8&subid=0&hid=7200&tmpid=1082&RD_PARM1=https%253A%252F%252Fwww.walmart.com%252Fip%252FNotebook-Doodles-Peace-Love-and-Music%252F52664116%253Faffp1%253Du_dNiS751TiCoT9_TTvDoXAHSu2GOWuwggXKOnWyauI%2526affilsrc%253Dapi",
    	            "standardShipRate": 5.99,
    	            "marketplace": false,
    	            "modelNumber": "DO5553",
    	            "productUrl": "http://c.affil.walmart.com/t/api02?l=https%3A%2F%2Fwww.walmart.com%2Fip%2FNotebook-Doodles-Peace-Love-and-Music%2F52664116%3Faffp1%3Du_dNiS751TiCoT9_TTvDoXAHSu2GOWuwggXKOnWyauI%26affilsrc%3Dapi%26veh%3Daff%26wmlspartner%3Dreadonlyapi",
    	            "customerRating": "4.0",
    	            "numReviews": 1,
    	            "customerRatingImage": "http://i2.walmartimages.com/i/CustRating/4.gif",
    	            "categoryNode": "3920_582361_9999446",
    	            "rhid": "32769",
    	            "bundle": false,
    	            "stock": "Available",
    	            "addToCartUrl": "http://c.affil.walmart.com/t/api02?l=http%3A%2F%2Faffil.walmart.com%2Fcart%2FaddToCart%3Fitems%3D52664116%7C1%26affp1%3Du_dNiS751TiCoT9_TTvDoXAHSu2GOWuwggXKOnWyauI%26affilsrc%3Dapi%26veh%3Daff%26wmlspartner%3Dreadonlyapi",
    	            "affiliateAddToCartUrl": "http://linksynergy.walmart.com/fs-bin/click?id=|LSNID|&offerid=223073.7200&type=14&catid=8&subid=0&hid=7200&tmpid=1082&RD_PARM1=http%253A%252F%252Faffil.walmart.com%252Fcart%252FaddToCart%253Fitems%253D52664116%257C1%2526affp1%253Du_dNiS751TiCoT9_TTvDoXAHSu2GOWuwggXKOnWyauI%2526affilsrc%253Dapi",
    	            "giftOptions": {
    	                "allowGiftWrap": false,
    	                "allowGiftMessage": false,
    	                "allowGiftReceipt": false
    	            },
    	            "imageEntities": [
    	                {
    	                    "thumbnailImage": "https://i5.walmartimages.com/asr/f78cfaf7-80b6-4460-bdcf-22681a1da868_1.b6a00b04d9704d77772d4e5d6ee688cc.jpeg?odnHeight=100&odnWidth=100&odnBg=FFFFFF",
    	                    "mediumImage": "https://i5.walmartimages.com/asr/f78cfaf7-80b6-4460-bdcf-22681a1da868_1.b6a00b04d9704d77772d4e5d6ee688cc.jpeg?odnHeight=180&odnWidth=180&odnBg=FFFFFF",
    	                    "largeImage": "https://i5.walmartimages.com/asr/f78cfaf7-80b6-4460-bdcf-22681a1da868_1.b6a00b04d9704d77772d4e5d6ee688cc.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF",
    	                    "entityType": "SECONDARY"
    	                },
    	                {
    	                    "thumbnailImage": "https://i5.walmartimages.com/asr/d641b119-aafb-4f7e-9ebc-198687f2b9d9_1.e09f040393256d04b47d3486761f8d37.jpeg?odnHeight=100&odnWidth=100&odnBg=FFFFFF",
    	                    "mediumImage": "https://i5.walmartimages.com/asr/d641b119-aafb-4f7e-9ebc-198687f2b9d9_1.e09f040393256d04b47d3486761f8d37.jpeg?odnHeight=180&odnWidth=180&odnBg=FFFFFF",
    	                    "largeImage": "https://i5.walmartimages.com/asr/d641b119-aafb-4f7e-9ebc-198687f2b9d9_1.e09f040393256d04b47d3486761f8d37.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF",
    	                    "entityType": "SECONDARY"
    	                },
    	                {
    	                    "thumbnailImage": "https://i5.walmartimages.com/asr/0d084401-7082-4758-a6f6-988dacc9590a_1.19931ce682f2fb05a19c396739d31e1c.jpeg?odnHeight=100&odnWidth=100&odnBg=FFFFFF",
    	                    "mediumImage": "https://i5.walmartimages.com/asr/0d084401-7082-4758-a6f6-988dacc9590a_1.19931ce682f2fb05a19c396739d31e1c.jpeg?odnHeight=180&odnWidth=180&odnBg=FFFFFF",
    	                    "largeImage": "https://i5.walmartimages.com/asr/0d084401-7082-4758-a6f6-988dacc9590a_1.19931ce682f2fb05a19c396739d31e1c.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF",
    	                    "entityType": "SECONDARY"
    	                },
    	                {
    	                    "thumbnailImage": "https://i5.walmartimages.com/asr/e934ad17-8e73-4eb1-a8bc-051ae0e613f4_1.4a653f7ab9f9c354a29e433d4109fa78.jpeg?odnHeight=100&odnWidth=100&odnBg=FFFFFF",
    	                    "mediumImage": "https://i5.walmartimages.com/asr/e934ad17-8e73-4eb1-a8bc-051ae0e613f4_1.4a653f7ab9f9c354a29e433d4109fa78.jpeg?odnHeight=180&odnWidth=180&odnBg=FFFFFF",
    	                    "largeImage": "https://i5.walmartimages.com/asr/e934ad17-8e73-4eb1-a8bc-051ae0e613f4_1.4a653f7ab9f9c354a29e433d4109fa78.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF",
    	                    "entityType": "SECONDARY"
    	                },
    	                {
    	                    "thumbnailImage": "https://i5.walmartimages.com/asr/ff0fd615-6cd4-4327-af4d-c417ea38cdab_1.d8528d66e08df2a39303501961e794e6.jpeg?odnHeight=100&odnWidth=100&odnBg=FFFFFF",
    	                    "mediumImage": "https://i5.walmartimages.com/asr/ff0fd615-6cd4-4327-af4d-c417ea38cdab_1.d8528d66e08df2a39303501961e794e6.jpeg?odnHeight=180&odnWidth=180&odnBg=FFFFFF",
    	                    "largeImage": "https://i5.walmartimages.com/asr/ff0fd615-6cd4-4327-af4d-c417ea38cdab_1.d8528d66e08df2a39303501961e794e6.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF",
    	                    "entityType": "PRIMARY"
    	                }
    	            ],
    	            "offerType": "ONLINE_ONLY",
    	            "isTwoDayShippingEligible": true,
    	            "availableOnline": true
    	        },
    	        {
    	            "itemId": 33940409,
    	            "parentItemId": 33940409,
    	            "name": "Patchwork Quilt Designs",
    	            "salePrice": 5.99,
    	            "categoryPath": "Books/Children's & Kids' Books/Children's Activity Books",
    	            "shortDescription": "Blankets of splendid geometric configurations, drawn from time-honored patchwork motifs, fill this festival of traditional folk art. Thirty-one bold designs are printed on only one side of perforated pages. Previously published as Traditional Patchwork Quilt Designs.",
    	            "longDescription": "Patchwork Quilt Designs",
    	            "thumbnailImage": "https://i5.walmartimages.com/asr/686c401a-68d6-4975-bdef-3d36d26b3227_1.08b75854886f21b51931b18adcd9ed1c.jpeg?odnHeight=100&odnWidth=100&odnBg=FFFFFF",
    	            "mediumImage": "https://i5.walmartimages.com/asr/686c401a-68d6-4975-bdef-3d36d26b3227_1.08b75854886f21b51931b18adcd9ed1c.jpeg?odnHeight=180&odnWidth=180&odnBg=FFFFFF",
    	            "largeImage": "https://i5.walmartimages.com/asr/686c401a-68d6-4975-bdef-3d36d26b3227_1.08b75854886f21b51931b18adcd9ed1c.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF",
    	            "productTrackingUrl": "http://linksynergy.walmart.com/fs-bin/click?id=|LSNID|&offerid=223073.7200&type=14&catid=8&subid=0&hid=7200&tmpid=1082&RD_PARM1=https%253A%252F%252Fwww.walmart.com%252Fip%252FPatchwork-Quilt-Designs%252F33940409%253Faffp1%253Du_dNiS751TiCoT9_TTvDoXAHSu2GOWuwggXKOnWyauI%2526affilsrc%253Dapi",
    	            "standardShipRate": 5.99,
    	            "marketplace": false,
    	            "productUrl": "http://c.affil.walmart.com/t/api02?l=https%3A%2F%2Fwww.walmart.com%2Fip%2FPatchwork-Quilt-Designs%2F33940409%3Faffp1%3Du_dNiS751TiCoT9_TTvDoXAHSu2GOWuwggXKOnWyauI%26affilsrc%3Dapi%26veh%3Daff%26wmlspartner%3Dreadonlyapi",
    	            "customerRating": "4.5",
    	            "numReviews": 4,
    	            "customerRatingImage": "http://i2.walmartimages.com/i/CustRating/4_5.gif",
    	            "categoryNode": "3920_582053_1099163",
    	            "rhid": "32822",
    	            "bundle": false,
    	            "stock": "Available",
    	            "addToCartUrl": "http://c.affil.walmart.com/t/api02?l=http%3A%2F%2Faffil.walmart.com%2Fcart%2FaddToCart%3Fitems%3D33940409%7C1%26affp1%3Du_dNiS751TiCoT9_TTvDoXAHSu2GOWuwggXKOnWyauI%26affilsrc%3Dapi%26veh%3Daff%26wmlspartner%3Dreadonlyapi",
    	            "affiliateAddToCartUrl": "http://linksynergy.walmart.com/fs-bin/click?id=|LSNID|&offerid=223073.7200&type=14&catid=8&subid=0&hid=7200&tmpid=1082&RD_PARM1=http%253A%252F%252Faffil.walmart.com%252Fcart%252FaddToCart%253Fitems%253D33940409%257C1%2526affp1%253Du_dNiS751TiCoT9_TTvDoXAHSu2GOWuwggXKOnWyauI%2526affilsrc%253Dapi",
    	            "giftOptions": {
    	                "allowGiftWrap": false,
    	                "allowGiftMessage": false,
    	                "allowGiftReceipt": false
    	            },
    	            "imageEntities": [
    	                {
    	                    "thumbnailImage": "https://i5.walmartimages.com/asr/686c401a-68d6-4975-bdef-3d36d26b3227_1.08b75854886f21b51931b18adcd9ed1c.jpeg?odnHeight=100&odnWidth=100&odnBg=FFFFFF",
    	                    "mediumImage": "https://i5.walmartimages.com/asr/686c401a-68d6-4975-bdef-3d36d26b3227_1.08b75854886f21b51931b18adcd9ed1c.jpeg?odnHeight=180&odnWidth=180&odnBg=FFFFFF",
    	                    "largeImage": "https://i5.walmartimages.com/asr/686c401a-68d6-4975-bdef-3d36d26b3227_1.08b75854886f21b51931b18adcd9ed1c.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF",
    	                    "entityType": "PRIMARY"
    	                }
    	            ],
    	            "offerType": "ONLINE_ONLY",
    	            "isTwoDayShippingEligible": true,
    	            "availableOnline": true
    	        },
    	        {
    	            "itemId": 51334231,
    	            "parentItemId": 51334231,
    	            "name": "Sacred Animals",
    	            "msrp": 9.99,
    	            "salePrice": 7.4,
    	            "categoryPath": "Books/Crafts & Hobbies Books/Game & Activity Books/General Games & Activity Books",
    	            "shortDescription": "Details Coming Soon",
    	            "longDescription": "&lt;p&gt;Part of the &quot;Coloring Books for the Soul&quot; series, a majestic adult coloring book packed with original art and evocative wisdom words, featuring stunning imagery that celebrates the animals, both real and imagined, that we revere across cultures--a creative and inspiring invitation to nourish our souls and reconnect with our spirit.&lt;/p&gt;&lt;p&gt;Filled with forty dazzling drawings sure to inspire the imagination, readers can color away their stress and anxiety while nourishing their souls with this intriguing coloring book that pays homage to our most revered animals. Lydia Hess's illustrations are accompanied by beautifully lettered wisdom words that can be colored and embellished as well--adding a further level of engagement and magic for readers.&lt;/p&gt;&lt;p&gt;Gorgeously packaged with a vibrant four-color cover by the artist and filled with fresh, modern illustrations suitable for framing, &lt;em&gt;Sacred Animals&lt;/em&gt; is an ideal way to unwind and create beauty in our lives.&lt;/p&gt;",
    	            "thumbnailImage": "https://i5.walmartimages.com/asr/1aee7d0b-1d41-4089-9902-fde46e9efe77_1.428875cb01a480bc615af12364c89a0d.jpeg?odnHeight=100&odnWidth=100&odnBg=FFFFFF",
    	            "mediumImage": "https://i5.walmartimages.com/asr/1aee7d0b-1d41-4089-9902-fde46e9efe77_1.428875cb01a480bc615af12364c89a0d.jpeg?odnHeight=180&odnWidth=180&odnBg=FFFFFF",
    	            "largeImage": "https://i5.walmartimages.com/asr/1aee7d0b-1d41-4089-9902-fde46e9efe77_1.428875cb01a480bc615af12364c89a0d.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF",
    	            "productTrackingUrl": "http://linksynergy.walmart.com/fs-bin/click?id=|LSNID|&offerid=223073.7200&type=14&catid=8&subid=0&hid=7200&tmpid=1082&RD_PARM1=https%253A%252F%252Fwww.walmart.com%252Fip%252FSacred-Animals%252F51334231%253Faffp1%253Du_dNiS751TiCoT9_TTvDoXAHSu2GOWuwggXKOnWyauI%2526affilsrc%253Dapi",
    	            "standardShipRate": 5.99,
    	            "marketplace": false,
    	            "productUrl": "http://c.affil.walmart.com/t/api02?l=https%3A%2F%2Fwww.walmart.com%2Fip%2FSacred-Animals%2F51334231%3Faffp1%3Du_dNiS751TiCoT9_TTvDoXAHSu2GOWuwggXKOnWyauI%26affilsrc%3Dapi%26veh%3Daff%26wmlspartner%3Dreadonlyapi",
    	            "customerRating": "5.0",
    	            "numReviews": 1,
    	            "customerRatingImage": "http://i2.walmartimages.com/i/CustRating/5.gif",
    	            "categoryNode": "3920_582361_9999446",
    	            "rhid": "32769",
    	            "bundle": false,
    	            "stock": "Available",
    	            "addToCartUrl": "http://c.affil.walmart.com/t/api02?l=http%3A%2F%2Faffil.walmart.com%2Fcart%2FaddToCart%3Fitems%3D51334231%7C1%26affp1%3Du_dNiS751TiCoT9_TTvDoXAHSu2GOWuwggXKOnWyauI%26affilsrc%3Dapi%26veh%3Daff%26wmlspartner%3Dreadonlyapi",
    	            "affiliateAddToCartUrl": "http://linksynergy.walmart.com/fs-bin/click?id=|LSNID|&offerid=223073.7200&type=14&catid=8&subid=0&hid=7200&tmpid=1082&RD_PARM1=http%253A%252F%252Faffil.walmart.com%252Fcart%252FaddToCart%253Fitems%253D51334231%257C1%2526affp1%253Du_dNiS751TiCoT9_TTvDoXAHSu2GOWuwggXKOnWyauI%2526affilsrc%253Dapi",
    	            "giftOptions": {
    	                "allowGiftWrap": false,
    	                "allowGiftMessage": false,
    	                "allowGiftReceipt": false
    	            },
    	            "imageEntities": [
    	                {
    	                    "thumbnailImage": "https://i5.walmartimages.com/asr/1aee7d0b-1d41-4089-9902-fde46e9efe77_1.428875cb01a480bc615af12364c89a0d.jpeg?odnHeight=100&odnWidth=100&odnBg=FFFFFF",
    	                    "mediumImage": "https://i5.walmartimages.com/asr/1aee7d0b-1d41-4089-9902-fde46e9efe77_1.428875cb01a480bc615af12364c89a0d.jpeg?odnHeight=180&odnWidth=180&odnBg=FFFFFF",
    	                    "largeImage": "https://i5.walmartimages.com/asr/1aee7d0b-1d41-4089-9902-fde46e9efe77_1.428875cb01a480bc615af12364c89a0d.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF",
    	                    "entityType": "PRIMARY"
    	                }
    	            ],
    	            "offerType": "ONLINE_AND_STORE",
    	            "isTwoDayShippingEligible": true,
    	            "availableOnline": true
    	        },
    	        {
    	            "itemId": 46506466,
    	            "parentItemId": 46506466,
    	            "name": "Coloring Ocean Mandalas : 30 Hand-Drawn Designs for Mindful Relaxation",
    	            "msrp": 10,
    	            "salePrice": 10,
    	            "categoryPath": "Books/Crafts & Hobbies Books/Game & Activity Books/Board Game Books",
    	            "shortDescription": "Coloring Ocean Mandalas: 30 Hand-Drawn Designs for Mindful Relaxation",
    	            "longDescription": "&lt;strong&gt;COLORING FOR ADULTS GETS A NAUTICAL TWIST WITH THIS COLLECTION OF WHIMSICAL MANDALAS&lt;/strong&gt; Relax, focus, reach a higher state of mindfulness, and simply enjoy yourself as you artistically fill in the intricate shapes. &lt;em&gt;Coloring Ocean Mandalas&lt;/em&gt; offers you an imaginative array of underwater images, including: &lt;strong&gt;- Whales&lt;br&gt;- Mermaids&lt;br&gt;- Sea Turtles&lt;br&gt;- Sea Horses&lt;br&gt;- Dolphins&lt;br&gt;- Sea Urchins&lt;br&gt;- Jellyfish&lt;/strong&gt;",
    	            "thumbnailImage": "https://i5.walmartimages.com/asr/d7b92036-5750-42bd-af8b-b34df3ea17b4_1.27b9f33056156983c425b107b3be9469.jpeg?odnHeight=100&odnWidth=100&odnBg=FFFFFF",
    	            "mediumImage": "https://i5.walmartimages.com/asr/d7b92036-5750-42bd-af8b-b34df3ea17b4_1.27b9f33056156983c425b107b3be9469.jpeg?odnHeight=180&odnWidth=180&odnBg=FFFFFF",
    	            "largeImage": "https://i5.walmartimages.com/asr/d7b92036-5750-42bd-af8b-b34df3ea17b4_1.27b9f33056156983c425b107b3be9469.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF",
    	            "productTrackingUrl": "http://linksynergy.walmart.com/fs-bin/click?id=|LSNID|&offerid=223073.7200&type=14&catid=8&subid=0&hid=7200&tmpid=1082&RD_PARM1=https%253A%252F%252Fwww.walmart.com%252Fip%252FColoring-Ocean-Mandalas-30-Hand-Drawn-Designs-for-Mindful-Relaxation%252F46506466%253Faffp1%253Du_dNiS751TiCoT9_TTvDoXAHSu2GOWuwggXKOnWyauI%2526affilsrc%253Dapi",
    	            "standardShipRate": 5.99,
    	            "marketplace": false,
    	            "productUrl": "http://c.affil.walmart.com/t/api02?l=https%3A%2F%2Fwww.walmart.com%2Fip%2FColoring-Ocean-Mandalas-30-Hand-Drawn-Designs-for-Mindful-Relaxation%2F46506466%3Faffp1%3Du_dNiS751TiCoT9_TTvDoXAHSu2GOWuwggXKOnWyauI%26affilsrc%3Dapi%26veh%3Daff%26wmlspartner%3Dreadonlyapi",
    	            "customerRating": "5.0",
    	            "numReviews": 1,
    	            "customerRatingImage": "http://i2.walmartimages.com/i/CustRating/5.gif",
    	            "categoryNode": "3920_582361_9999446",
    	            "rhid": "33358",
    	            "bundle": false,
    	            "stock": "Available",
    	            "addToCartUrl": "http://c.affil.walmart.com/t/api02?l=http%3A%2F%2Faffil.walmart.com%2Fcart%2FaddToCart%3Fitems%3D46506466%7C1%26affp1%3Du_dNiS751TiCoT9_TTvDoXAHSu2GOWuwggXKOnWyauI%26affilsrc%3Dapi%26veh%3Daff%26wmlspartner%3Dreadonlyapi",
    	            "affiliateAddToCartUrl": "http://linksynergy.walmart.com/fs-bin/click?id=|LSNID|&offerid=223073.7200&type=14&catid=8&subid=0&hid=7200&tmpid=1082&RD_PARM1=http%253A%252F%252Faffil.walmart.com%252Fcart%252FaddToCart%253Fitems%253D46506466%257C1%2526affp1%253Du_dNiS751TiCoT9_TTvDoXAHSu2GOWuwggXKOnWyauI%2526affilsrc%253Dapi",
    	            "giftOptions": {
    	                "allowGiftWrap": false,
    	                "allowGiftMessage": false,
    	                "allowGiftReceipt": false
    	            },
    	            "imageEntities": [
    	                {
    	                    "thumbnailImage": "https://i5.walmartimages.com/asr/d7b92036-5750-42bd-af8b-b34df3ea17b4_1.27b9f33056156983c425b107b3be9469.jpeg?odnHeight=100&odnWidth=100&odnBg=FFFFFF",
    	                    "mediumImage": "https://i5.walmartimages.com/asr/d7b92036-5750-42bd-af8b-b34df3ea17b4_1.27b9f33056156983c425b107b3be9469.jpeg?odnHeight=180&odnWidth=180&odnBg=FFFFFF",
    	                    "largeImage": "https://i5.walmartimages.com/asr/d7b92036-5750-42bd-af8b-b34df3ea17b4_1.27b9f33056156983c425b107b3be9469.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF",
    	                    "entityType": "PRIMARY"
    	                }
    	            ],
    	            "offerType": "ONLINE_ONLY",
    	            "isTwoDayShippingEligible": true,
    	            "availableOnline": true
    	        }
    	    ],
    	    "facets": []
    	};
    }
});