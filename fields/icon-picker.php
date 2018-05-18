<?php
/**
 *
 * Initial version created 18-05-2018 / 05:55 AM
 *
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 * @version 1.0
 * @since 1.0
 * @package
 * @link
 * @copyright 2018 Varun Sridharan
 * @license GPLV3 Or Greater (https://www.gnu.org/licenses/gpl-3.0.txt)
 */

if ( ! defined( 'ABSPATH' ) ) {
	die;
}

if ( ! class_exists( 'WPOnion_Field_icon_picker' ) ) {
	class WPOnion_Field_icon_picker extends WPOnion_Field {

		protected function output() {
			echo $this->before();

			echo $this->render_input();
			echo $this->render_value();
			echo $this->render_buttons();

			echo $this->after();
		}

		protected function render_input() {
			$attr = array(
				'type'  => ( $this->has( 'show_input' ) ) ? 'text' : 'hidden',
				'value' => $this->value(),
				'class' => ( $this->has( 'show_input' ) ) ? 'wponion-icon-picker-input' : 'hidden',
			);

			return '<input ' . $this->attributes( $attr ) . '/>';
		}

		protected function render_value() {
			return '<span class="wponion-icon-preview">' . wponion_icon( 'fab fa-facebook' ) . '</span>';
		}


		protected function js_field_args() {
			$tooltip = $this->data( 'icon_tooltip' );
			$tooltip = ( false === $tooltip ) ? 'false' : $tooltip;

			return array(
				'popup_tooltip' => $tooltip,
			);
		}

		protected function render_buttons() {
			$add    = $this->attributes( array(
				'type'  => 'button',
				'class' => array( 'wponion-add-icon', 'btn', 'btn-success', 'btn-sm' ),
			) );
			$html   = '<button ' . $add . '>' . __( 'Add Icon' ) . '</button>';
			$remove = $this->attributes( array(
				'type'  => 'button',
				'class' => array( 'wponion-remove-icon', 'btn', 'btn-danger', 'btn-sm' ),
			) );
			$html   = $html . '<button ' . $remove . '>' . __( 'Remove Icon' ) . '</button>';
			return $html;
		}

		protected function field_default() {
			return array(
				'show_input'   => true,
				'icon_tooltip' => array(
					'placement' => 'bottom',
					'arrow'     => true,
				),
			);
		}

		public function field_assets() {
			// TODO: Implement field_assets() method.
		}
	}
}