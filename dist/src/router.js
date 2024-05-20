"use strict";
exports.__esModule = true;
var express_1 = require("express");
var express_validator_1 = require("express-validator");
var technicalskills_1 = require("./handlers/technicalskills");
var router = (0, express_1.Router)();
router.get('/technicalskills', technicalskills_1.gettechnicalskills);
router.post('/technicalskills', (0, express_validator_1.body)('title').isString().notEmpty(), (0, express_validator_1.body)('tools').isString().notEmpty(), (0, express_validator_1.body)('proficiency').isString().notEmpty(), (0, express_validator_1.body)('employeesId').isInt().optional(), technicalskills_1.createtechnicalskills);
router.get('/technicalskills/:id', (0, express_validator_1.param)('id').isInt(), technicalskills_1.gettechnicalskillsById);
/**
 * Instructor Routes
 */
/**
 * Video Routes
 */
exports["default"] = router;
//# sourceMappingURL=router.js.map