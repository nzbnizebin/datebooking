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
let WechatUser = class WechatUser {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], WechatUser.prototype, "id", void 0);
__decorate([
    typeorm_1.Column('number', { nullable: false }),
    __metadata("design:type", Number)
], WechatUser.prototype, "user_id", void 0);
__decorate([
    typeorm_1.Column('string', { nullable: true }),
    __metadata("design:type", String)
], WechatUser.prototype, "nickname", void 0);
__decorate([
    typeorm_1.Column('string', { nullable: true }),
    __metadata("design:type", String)
], WechatUser.prototype, "headimgurl", void 0);
__decorate([
    typeorm_1.Column('number', { nullable: true }),
    __metadata("design:type", Number)
], WechatUser.prototype, "sex", void 0);
__decorate([
    typeorm_1.CreateDateColumn(),
    __metadata("design:type", Date)
], WechatUser.prototype, "created_at", void 0);
__decorate([
    typeorm_1.UpdateDateColumn(),
    __metadata("design:type", Date)
], WechatUser.prototype, "updated_at", void 0);
WechatUser = __decorate([
    typeorm_1.Entity()
], WechatUser);
exports.WechatUser = WechatUser;
//# sourceMappingURL=wechat_user.entity.js.map