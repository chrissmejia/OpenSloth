////////////////////////////////////////////////////////////////////////////////////////////
// The MIT License (MIT)                                                                  //
//                                                                                        //
// Copyright (C) 2015  Christopher Mejía Montoya - me@chrissmejia.com - chrissmejia.com   //
//                                                                                        //
// Permission is hereby granted, free of charge, to any person obtaining a copy           //
// of this software and associated documentation files (the "Software"), to deal          //
// in the Software without restriction, including without limitation the rights           //
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell              //
// copies of the Software, and to permit persons to whom the Software is                  //
// furnished to do so, subject to the following conditions:                               //
//                                                                                        //
// The above copyright notice and this permission notice shall be included in all         //
// copies or substantial portions of the Software.                                        //
//                                                                                        //
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR             //
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,               //
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE            //
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER                 //
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,          //
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE          //
// SOFTWARE.                                                                              //
////////////////////////////////////////////////////////////////////////////////////////////

(function(){
    "use strict";
    // Foundation JavaScript
    // Documentation can be found at: http://foundation.zurb.com/docs
    $(document).foundation();

    var side_content_tag = $('#side_content');
    var side_content_close_tag = $('#side_content .close');
    var inner_content_tag = $('#inner_content');
    var top_side_content_object_tag = $('.side-content-buttons');
    var top_side_content_button_tag = $('.side-content-buttons a');

    window.OpenSloth = {
        name : 'OpenSloth',
        version : '0.1',
        
        header : {
            side_content_buttons : {
                show : function() {
                    top_side_content_object_tag.removeClass("hidden");
                },
                hide : function() {
                    top_side_content_object_tag.addClass("hidden");
                },
            }
        },
        side_content : {
        	width : side_content_tag.width(),

            show : function() {
                inner_content_tag.removeClass("full");
                OpenSloth.header.side_content_buttons.hide();
            },
        	hide : function() {
                inner_content_tag.addClass("full");
                OpenSloth.header.side_content_buttons.show();
        	},
        }

    }
    OpenSloth.side_content.hide();

    top_side_content_button_tag.click(function(){
        var target_tab = $(this).data('tab');
        $('.tab-title a[aria-controls="' + target_tab + '"]').trigger( "click" );
        OpenSloth.side_content.show();
    });
    side_content_close_tag.click(function(){
        OpenSloth.side_content.hide();
    });
})();