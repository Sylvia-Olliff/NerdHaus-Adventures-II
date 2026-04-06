
function CreateRecipeGenerator(event) {
    const genId = (type, result) => {
        if (!result) {
            return `nerdhaus:create/${type}/recipe_${Date.now()}`;
        }

        let name;

        if (typeof result === 'string') {
            name = result;
        } else if (result.item) {
            // Item result format: { item: "minecraft:iron_ingot", count: 2 }
            name = result.item;
        } else if (result.id) {
            // Fluid result format: { id: "minecraft:water", amount: 1000 }
            name = result.id;
        } else if (result.fluid) {
            // Alternative fluid format
            name = result.fluid;
        } else {
            // Fallback
            return `nerdhaus:create/${type}/recipe_${Date.now()}`;
        }

        // Extract the item/fluid name from full identifier
        if (name.includes(':')) {
            name = name.split(':')[1];
        }

        return `nerdhaus:create/${type}/${name}`;
    }

    const createRecipe = type => (param) => {
        const recipe = {
            type: `create:${type}`,
            ingredients: [],
            results: [],
        };

        // Add type-specific parameters
        if (type === 'mixing' && param) {
            recipe.heat_requirement = param;
        } else if ((type === 'crushing' || type === 'milling') && typeof param === 'number') {
            recipe.processing_time = param;
        }

        const builder = {
            itemIn(item) {
                const ingredient = Ingredient.of(item).toJson();
                recipe.ingredients.push(ingredient);
                return builder;
            },
            fluidIn(fluid) {
                let amount = 1000;
                let id = fluid;

                if (typeof fluid === 'string' && fluid.includes('x ')) {
                    let [amountStr, fluidId] = fluid.split('x ');
                    amount = parseInt(amountStr);
                    id = fluidId;
                }

                const isFluidTag = id.includes('#');
                if (isFluidTag) id = id.slice(1);

                const fluidIngredient = {
                    fluid: isFluidTag ? undefined : id,
                    fluid_tag: isFluidTag ? id : undefined,
                    amount: amount,
                    type: isFluidTag ? 'fluid_tag' : 'fluid_stack',
                };

                if (isFluidTag) delete fluidIngredient.fluid;
                else delete fluidIngredient.fluid_tag;

                recipe.ingredients.push(fluidIngredient);
                return builder;
            },
            itemOut(item, chance) {
                const result = JSON.parse(Item.of(item).toJson());
                if (chance) result.chance = chance;
                recipe.results.push(result);
                return builder;
            },
            fluidOut(fluid) {
                recipe.results.push(Fluid.of(fluid).toJson());
                return builder;
            },
            id(recipeId) {
                event.custom(recipe).id(recipeId);
                return builder;
            },
            register() {
                const autoId = genId(type, recipe.results[0]);
                event.custom(recipe).id(autoId);
                return builder;
            }
        };

        return builder;
    };

    return {
        compacting: createRecipe('compacting'),
        crushing: createRecipe('crushing'),
        cutting: createRecipe('cutting'),
        deploying: createRecipe('deploying'),
        emptying: createRecipe('emptying'),
        filling: createRecipe('filling'),
        haunting: createRecipe('haunting'),
        item_application: createRecipe('item_application'),
        milling: createRecipe('milling'),
        mixing: createRecipe('mixing'),
        pressing: createRecipe('pressing'),
        sandpaper_polishing: createRecipe('sandpaper_polishing'),
        splashing: createRecipe('splashing')
    }
}