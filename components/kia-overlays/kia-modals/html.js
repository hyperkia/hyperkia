
import "./modals/kia-icon-library-modal/index.js";
import "./modals/kia-font-library-modal/index.js";
import "./modals/kia-file-import-modal/index.js";
import "./modals/kia-missing-fonts-modal/index.js";
import "./modals/kia-assets-manager-modal/index.js";

const html = `
	<div class="modals" data-id="modals">
		<kia-file-import-modal class="modal show" data-class="modal"></kia-file-import-modal>
	</div>
`;

export default html;