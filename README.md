# Docs

The component hierarchy is:

> App (root) > Table > LineItem

These components are defined in `src/App.js`, `src/Table.js` and `src/LineItem.js` respectively.

The CSS has been split per component.

Checkbox state is consolidated inside the Table component. See the definition of `toggleCheckbox` in `Table.js`. State management libs like Redux aren't necessary for this simple use-case where I need to track 8 checkboxes.
