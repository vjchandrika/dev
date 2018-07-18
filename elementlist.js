
var ApiGen = ApiGen || {};
ApiGen.elements = [["f","_wponion_field_id()"],["f","_wponion_get_field_value()"],["f","_wponion_valid_field()"],["c","Parsedown"],["c","WP_Async_Request"],["c","WP_Background_Process"],["f","wpongpo()"],["c","WPOnion\\Assets"],["c","WPOnion\\Async_Request"],["c","WPOnion\\Autoloader"],["c","WPOnion\\Bridge"],["c","WPOnion\\Bridge\\Field_Builder"],["c","WPOnion\\Bridge\\Module"],["c","WPOnion\\Bridge\\Value"],["c","WPOnion\\Bridge\\value_loop"],["c","WPOnion\\Core\\Array_Finder"],["c","WPOnion\\Core_Ajax"],["c","WPOnion\\DB\\Metabox_Save_Handler"],["c","WPOnion\\DB\\Query"],["c","WPOnion\\DB\\Save_Handler"],["c","WPOnion\\DB\\Settings_Save_Handler"],["c","WPOnion\\DB\\Taxonomy_Save_Handler"],["c","WPOnion\\DB\\User_Profile_Save_Handler"],["c","WPOnion\\DB\\WooCommerce_Save_Handler"],["c","WPOnion\\Field"],["c","WPOnion\\Field\\accordion"],["c","WPOnion\\Field\\button"],["c","WPOnion\\Field\\card"],["c","WPOnion\\Field\\checkbox"],["c","WPOnion\\Field\\checkbox_radio"],["c","WPOnion\\Field\\Cloner"],["c","WPOnion\\Field\\color_palette"],["c","WPOnion\\Field\\color_picker"],["c","WPOnion\\Field\\content"],["c","WPOnion\\Field\\date_picker"],["c","WPOnion\\Field\\fieldset"],["c","WPOnion\\Field\\font_picker"],["c","WPOnion\\Field\\gallery"],["c","WPOnion\\Field\\group"],["c","WPOnion\\Field\\heading"],["c","WPOnion\\Field\\icon_picker"],["c","WPOnion\\Field\\image"],["c","WPOnion\\Field\\image_select"],["c","WPOnion\\Field\\jambo_content"],["c","WPOnion\\Field\\key_value"],["c","WPOnion\\Field\\notice"],["c","WPOnion\\Field\\radio"],["c","WPOnion\\Field\\select"],["c","WPOnion\\Field\\subheading"],["c","WPOnion\\Field\\switcher"],["c","WPOnion\\Field\\tab"],["c","WPOnion\\Field\\text"],["c","WPOnion\\Field\\textarea"],["c","WPOnion\\Field\\upload"],["c","WPOnion\\Field\\WP_Editor"],["c","WPOnion\\Field\\wp_link"],["c","WPOnion\\Helper"],["c","WPOnion\\Icons"],["c","WPOnion\\JS\\Localize_API"],["c","WPOnion\\Modules\\Customize\\control"],["c","WPOnion\\Modules\\Customize\\Control\\checkbox"],["c","WPOnion\\Modules\\Customize\\Control\\cloneable"],["c","WPOnion\\Modules\\Customize\\Control\\fieldset"],["c","WPOnion\\Modules\\Customize\\Control\\gallery"],["c","WPOnion\\Modules\\Customize\\Control\\image"],["c","WPOnion\\Modules\\Customize\\Control\\key_value"],["c","WPOnion\\Modules\\Customize\\Control\\nested_fields"],["c","WPOnion\\Modules\\Customize\\postmessage"],["c","WPOnion\\Modules\\customizer"],["c","WPOnion\\Modules\\Dashboard_Widgets"],["c","WPOnion\\Modules\\metabox"],["c","WPOnion\\Modules\\Settings"],["c","WPOnion\\Modules\\taxonomy"],["c","WPOnion\\Modules\\User_Profile"],["c","WPOnion\\Modules\\woocommerce"],["c","WPOnion\\Registry\\Common"],["c","WPOnion\\Registry\\Core"],["c","WPOnion\\Registry\\Field_Error"],["c","WPOnion\\Registry\\Fields"],["c","WPOnion\\Registry\\Modules"],["c","WPOnion\\Theme"],["c","WPOnion\\Value\\accordion"],["c","WPOnion\\Value\\checkbox"],["c","WPOnion\\Value\\color_palette"],["c","WPOnion\\Value\\color_picker"],["c","WPOnion\\Value\\fieldset"],["c","WPOnion\\Value\\font_picker"],["c","WPOnion\\Value\\gallery"],["c","WPOnion\\Value\\image"],["c","WPOnion\\Value\\image_select"],["c","WPOnion\\Value\\key_value"],["c","WPOnion\\Value\\radio"],["c","WPOnion\\Value\\switcher"],["c","WPOnion\\Value\\text"],["c","WPOnion\\Value\\textarea"],["c","WPOnion\\Value_API"],["f","wponion__image_select_options()"],["f","wponion__options()"],["f","wponion__options_extra()"],["f","wponion_add_element()"],["f","wponion_array_to_html_attributes()"],["f","wponion_async()"],["f","wponion_builder()"],["f","wponion_card_img()"],["f","wponion_core_registry()"],["f","wponion_dashboard_registry()"],["f","wponion_debug_assets()"],["f","wponion_delete_term_meta()"],["f","wponion_extract_font_variant()"],["f","wponion_field()"],["f","wponion_field_debug()"],["f","wponion_field_value_class()"],["f","wponion_fonts_options_html()"],["f","wponion_get_all_fields_ids_and_defaults()"],["f","wponion_get_field_class()"],["f","wponion_get_fonts_array()"],["f","wponion_get_registry()"],["f","wponion_get_registry_instance()"],["f","wponion_get_template()"],["f","wponion_get_template_html()"],["f","wponion_get_term_meta()"],["f","wponion_get_var()"],["f","wponion_gif_image()"],["f","wponion_google_fonts()"],["f","wponion_google_fonts_data()"],["f","wponion_hash_array()"],["f","wponion_hash_string()"],["f","wponion_html_class()"],["f","wponion_icon()"],["f","wponion_icon_libraries()"],["f","wponion_image_select_options()"],["f","wponion_init()"],["f","wponion_is_ajax()"],["f","wponion_is_debug()"],["f","wponion_is_unarrayed()"],["f","wponion_jpg_image()"],["f","wponion_js_vars()"],["f","wponion_load_asset()"],["f","wponion_load_core_assets()"],["f","wponion_load_sample_files()"],["f","wponion_localize()"],["f","wponion_localize_object_name()"],["f","wponion_locate_template()"],["f","wponion_metabox_registry()"],["c","WPOnion_modern_Theme"],["f","wponion_noninput_fields()"],["f","wponion_plugin_localize()"],["f","wponion_query()"],["f","wponion_read_json_files()"],["f","wponion_registry()"],["f","wponion_required_value()"],["f","wponion_s3()"],["f","wponion_s3_size()"],["f","wponion_select_classes()"],["f","wponion_select_frameworks()"],["f","wponion_settings()"],["f","wponion_settings_registry()"],["f","wponion_taxonomy_registry()"],["f","wponion_theme_registry()"],["f","wponion_update_term_meta()"],["f","wponion_user_profile_registry()"],["f","wponion_valid_user_input_field()"],["f","wponion_validate_parent_section_ids()"],["f","wponion_validate_select_framework()"],["f","wponion_value_registry()"],["f","wponion_websafe_fonts()"],["c","WPOnion_wp_Theme"]];