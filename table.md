#### user

| Column     | Description |
| ---------- | ----------- |
| id         | 用户ID      |
| name       | 备注名      |
| created_at | timestamp   |
| updated_at | timestamp   |
|            |             |

#### wechat_user

| Column     | Description     |
| ---------- | --------------- |
| id         | Id              |
| user_id    | user id         |
| open_id    | -               |
| nickname   | wechat nickname |
| headimgurl | 微信头像        |
| sex        | 性别            |
| created_at | timestamp       |
| updated_at | timestamp       |

#### team

| Column     | Description |
| ---------- | ----------- |
| id         | -           |
| desc       | 活动描述    |
| begin_time | 开始时间    |
| min_user   | 最少人数    |
| created_by | 创建用户    |
| is_cancel  | -           |
| created_at | timestamp   |
| updated_at | timestamp   |

#### team_user

| Column     | Description |
| ---------- | ----------- |
| id         | -           |
| team_id    | -           |
| user_id    | -           |
| free_time  | 闲时        |
| is_cancel  |             |
| created_at | timestamp   |
| updated_at | timestamp   |


