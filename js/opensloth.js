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

    // All tag selectors
    var body_tag = $('body');
    var body_offcavas_tag = $('body > .off-canvas');

    var menu_icon_tag = $('.menu-icon a');

    var top_side_content_object_tag = $('.side-content-buttons');
    var top_side_content_button_tag = $('.side-content-buttons a');

    var side_content_tabs_str = '.tab-title a';
    var side_content_tag = $('#side_content');
    var side_content_close_tag = $('#side_content .close');

    var inner_content_tag = $('#inner_content');
    var inner_content_offcavas_tag = $('#inner_content .off-canvas');

    /////////////////////////////////////////////////////////////////
    // OpenSloth object to manange all the interactions on the web.
    // You can use JS to trigger any action on the template any time
    // E.g: OpenSloth.side_content.show(); open the side bar content
    /////////////////////////////////////////////////////////////////
    window.OpenSloth = {
        name : 'OpenSloth',
        version : '0.3',
        
        body : {
            scroll : {
                activate : function() {
                    body_tag.removeClass("non-scroll");
                },
                deactivate : function() {
                    body_tag.addClass("non-scroll");
                },
                toggle : function() {
                    body_tag.toggleClass("non-scroll");
                },
            }
        },
        header : {
            side_content_buttons : {
                show : function() {
                    top_side_content_object_tag.removeClass("hidden");
                },
                hide : function() {
                    top_side_content_object_tag.addClass("hidden");
                },
                activate : function(tag) {
                    this.deactivate();
                    tag.addClass("active");
                },
                deactivate : function() {
                    top_side_content_button_tag.removeClass("active");
                },
            }
        },
        side_content : {
        	width : side_content_tag.width(),

            show : function() {
                inner_content_tag.removeClass("full");
                OpenSloth.header.side_content_buttons.hide();
                OpenSloth.side_menu.hide();
                OpenSloth.body.scroll.deactivate();
            },
        	hide : function() {
                inner_content_tag.addClass("full");
                OpenSloth.header.side_content_buttons.deactivate();
                OpenSloth.header.side_content_buttons.show();
                OpenSloth.body.scroll.activate();
        	},
        },
        side_menu : {
            show : function() {
                body_tag.removeClass("full");
                OpenSloth.side_content.hide();
                OpenSloth.body.scroll.deactivate();
            },
            hide : function() {
                body_tag.addClass("full");
                OpenSloth.body.scroll.activate();
            },
            toggle : function() {
                body_tag.toggleClass("full");
                OpenSloth.side_content.hide();
                OpenSloth.body.scroll.toggle();
            },
        }

    }
    

    /////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////
    // Triggers
    /////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////

    /////////////////////////////////////////////////////////////////
    // Side Content
    /////////////////////////////////////////////////////////////////

    // Change the open tab
    top_side_content_button_tag.click(function(){
        var target_tab = $(this).data('tab');
        $(side_content_tabs_str + '[aria-controls="' + target_tab + '"]').trigger( "click" );
        OpenSloth.side_content.show();
    });
    // Activate the right header button every time the tab change
    $(side_content_tabs_str).click(function(){
        var active_tag = top_side_content_object_tag.find('[data-tab="'+ $(this).attr("aria-controls") + '"]');
        OpenSloth.header.side_content_buttons.activate(active_tag);
    });

    // Close actions
    side_content_close_tag.click(function(){
        OpenSloth.side_content.hide();
    });
    inner_content_offcavas_tag.click(function(){
        OpenSloth.side_content.hide();
    });

    /////////////////////////////////////////////////////////////////
    // Main menu
    /////////////////////////////////////////////////////////////////

    // Open and hide menu
    menu_icon_tag.click(function(){
        OpenSloth.side_menu.toggle();
    });
    // Close actions
    body_offcavas_tag.click(function(){
        OpenSloth.side_menu.hide();
    });
})();