<?php
/**
 *
 * Initial version created 23-05-2018 / 04:13 PM
 *
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 * @version 1.0
 * @since 1.0
 * @package
 * @link
 * @copyright 2018 Varun Sridharan
 * @license GPLV3 Or Greater (https://www.gnu.org/licenses/gpl-3.0.txt)
 */

namespace WPOnion\Field;
if ( ! defined( 'ABSPATH' ) ) {
	die;
}

if ( ! class_exists( '\WPOnion\Field\image' ) ) {
	/**
	 * Class image
	 *
	 * @package WPOnion\Field
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class image extends \WPOnion\Field {
		/**
		 * Final HTML Output;
		 *
		 * @return mixed;
		 */
		protected function output() {
			echo $this->before();
			$add_show     = ( ! empty( $this->value() ) ) ? 'style="display:none;"' : false;
			$preview_show = ( empty( $this->value() ) ) ? 'style="display:none;"' : false;

			echo '<input type="hidden" id="image_id" value="' . $this->value() . '" name="' . $this->name() . '"/>';
			echo '<div class="wponion-image-preview">';

			echo '<div class="wponion-preview-add" ' . $add_show . '>';
			echo wponion_icon( 'dashicons dashicons-plus wponion-add' );
			echo '</div>';

			$this->show_image( $this->value(), $preview_show );
			echo '</div>';
			echo $this->after();
		}

		/**
		 * Renders Value HTML.
		 *
		 * @param string $value
		 * @param string $preview_show
		 */
		protected function show_image( $value = '', $preview_show = '' ) {
			echo '<div class="wponion-preview" ' . $preview_show . '>';
			echo wponion_icon( 'dashicons dashicons-no-alt wponion-remove' );
			$thumbnail = wp_get_attachment_image_src( $value, 'thumbnail' );
			$fullsize  = wp_get_attachment_image_src( $value, 'full' );
			$thumbnail = isset( $thumbnail[0] ) ? $thumbnail[0] : false;
			$fullsize  = isset( $fullsize[0] ) ? $fullsize[0] : false;
			echo '<img src="' . $thumbnail . '" data-fullsize="' . $fullsize . '" class="hidden"/>';
			echo '</div>';
		}

		/**
		 * Returns all fields default.
		 *
		 * @return array|mixed
		 */
		protected function field_default() {
			return array();
		}

		/**
		 * Loads the required plugins assets.
		 *
		 * @return mixed|void
		 */
		public function field_assets() {
			wp_enqueue_media();
		}
	}
}
