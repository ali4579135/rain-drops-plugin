<?php
/*
Plugin Name: Snow Effect
Description: This plugin adds a snow effect to all pages of the website.
Version: 1.0
Author: Your Name
*/

// Exit if accessed directly
if (!defined('ABSPATH')) {
    exit;
}

// Define plugin constants
define('SNOW_EFFECT_PLUGIN_DIR', plugin_dir_path(__FILE__));
define('SNOW_EFFECT_PLUGIN_URL', plugin_dir_url(__FILE__));

// Enqueue scripts and styles
function snow_effect_enqueue_scripts() {
    wp_enqueue_style('snow-effect-style', SNOW_EFFECT_PLUGIN_URL . 'assets/css/style.css');
    wp_enqueue_script('snow-effect-script', SNOW_EFFECT_PLUGIN_URL . 'assets/js/snow.js', [], null, true);
}
add_action('wp_enqueue_scripts', 'snow_effect_enqueue_scripts');
