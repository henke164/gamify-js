var Textures = {};

Textures['orcAnimations.idleAnimation'] = [
    new Texture2D('assets/enemies/1_ORK/IDLE/IDLE_000.png', null, 50),
    new Texture2D('assets/enemies/1_ORK/IDLE/IDLE_001.png', null, 50),
    new Texture2D('assets/enemies/1_ORK/IDLE/IDLE_002.png', null, 50),
    new Texture2D('assets/enemies/1_ORK/IDLE/IDLE_003.png', null, 50),
    new Texture2D('assets/enemies/1_ORK/IDLE/IDLE_004.png', null, 50),
    new Texture2D('assets/enemies/1_ORK/IDLE/IDLE_005.png', null, 50),
    new Texture2D('assets/enemies/1_ORK/IDLE/IDLE_006.png', null, 50)
];

Textures['orcAnimations.movementAnimation'] = [
    new Texture2D('assets/enemies/1_ORK/RUN/RUN_000.png', null, 50),
    new Texture2D('assets/enemies/1_ORK/RUN/RUN_001.png', null, 50),
    new Texture2D('assets/enemies/1_ORK/RUN/RUN_002.png', null, 50),
    new Texture2D('assets/enemies/1_ORK/RUN/RUN_003.png', null, 50),
    new Texture2D('assets/enemies/1_ORK/RUN/RUN_004.png', null, 50),
    new Texture2D('assets/enemies/1_ORK/RUN/RUN_005.png', null, 50),
    new Texture2D('assets/enemies/1_ORK/RUN/RUN_006.png', null, 50)
];

Textures['arrows.default'] = new Texture2D("assets/arrow.png");

Textures['arrows.frost'] = new Texture2D("assets/frost-arrow.png");

Textures['buttons.default'] = new Texture2D('assets/button.png', 220, 75);

Textures['buttons.selected'] = new Texture2D('assets/button_sel.png', 220, 75);

Textures['buttons.close'] = new Texture2D('assets/close.png', 50, 50);

Textures['labels.red'] = new Texture2D('assets/red_label.png');

var difficultySelectorSize = {
    width: 120,
    height: 113
};

Textures['difficultySelector.enabled'] = new Texture2D('assets/level_enabled.png', difficultySelectorSize.width, difficultySelectorSize.height);

Textures['difficultySelector.disabled'] = new Texture2D('assets/level_locked.png', difficultySelectorSize.width, difficultySelectorSize.height);
