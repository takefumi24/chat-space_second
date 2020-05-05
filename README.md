# README
# Chat-Space DB設計
## usersテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|email|string|null: false, add_index :users, unique: true|
|password|string|null: false|

### Association
- has_many :messages
- has_many :groups, through: :users_groups
- has_many :users_groups


## groupsテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|

### Association
- has_many :messages
- has_many :users, through: :users_groups
- has_many :users_groups


## messagesテーブル
|Column|Type|Options|
|------|----|-------|
|body|string|
|image|string|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- has_many :messages
- has_many :users, through: :users_groups
- has_many :users_groups


## users_groupsテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user
