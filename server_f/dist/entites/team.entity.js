"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
let Team = class Team {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Team.prototype, "id", void 0);
__decorate([
    typeorm_1.Column('string', { nullable: true }),
    __metadata("design:type", String)
], Team.prototype, "desc", void 0);
__decorate([
    typeorm_1.Column('number', { nullable: true }),
    __metadata("design:type", Number)
], Team.prototype, "begin_time", void 0);
__decorate([
    typeorm_1.Column('number', { nullable: true, default: 0 }),
    __metadata("design:type", Number)
], Team.prototype, "min_user", void 0);
__decorate([
    typeorm_1.Column('number', { nullable: true }),
    __metadata("design:type", Number)
], Team.prototype, "created_by", void 0);
__decorate([
    typeorm_1.CreateDateColumn(),
    __metadata("design:type", Date)
], Team.prototype, "created_at", void 0);
__decorate([
    typeorm_1.UpdateDateColumn(),
    __metadata("design:type", Date)
], Team.prototype, "updated_at", void 0);
Team = __decorate([
    typeorm_1.Entity()
], Team);
exports.Team = Team;
//# sourceMappingURL=team.entity.js.map