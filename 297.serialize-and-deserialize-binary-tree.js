/*
 * @lc app=leetcode id=297 lang=javascript
 *
 * [297] Serialize and Deserialize Binary Tree
 */

const { func } = require("assert-plus");
const { traverse } = require("babel-core");
const { null, null } = require("check-types");
const database = require("mime-db");

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

// /**
//  * Encodes a tree to a single string.
//  *
//  * @param {TreeNode} root
//  * @return {string}
//  */
// var serialize = function (root) {
//   if (!root) {
//     return "[]";
//   }

//   let res = "";
//   let node = root;
//   const queue = [node];
//   while (queue.length) {
//     const front = queue.shift();
//     if (front) {
//       res += `${front.val},`;
//       queue.push(front.left);
//       queue.push(front.right);
//     } else {
//       res += "#,";
//     }
//   }

//   res = res.substring(0, res.length - 1); // 去掉最后一个逗号

//   return `[${res}]`;
// };

// /**
//  * Decodes your encoded data to tree.
//  *
//  * @param {string} data
//  * @return {TreeNode}
//  */
// var deserialize = function (data) {
//   if (data.length <= 2) {
//     return null;
//   }

//   const nodes = data.substring(1, data.length - 1).split(",");
//   const root = new TreeNode(parseInt(nodes[0]));
//   nodes.shift();

//   const queue = [root];
//   while (queue.length) {
//     const node = queue.shift();
//     // 第一个是左节点，节点为空，直接跳过
//     const leftVal = nodes.shift();
//     if (leftVal !== "#") {
//       node.left = new TreeNode(leftVal);
//       queue.push(node.left);
//     }
//     // 第二个是右节点，节点为空，直接跳过
//     const rightVal = nodes.shift();
//     if (rightVal !== "#") {
//       node.right = new TreeNode(rightVal);
//       queue.push(node.right);
//     }
//   }

//   return root;
// };


/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
//  */
// var serialize = function (root) {
//   if(root === null) return "[]";
//   let ret = [];
//   traverseSerialize(root, ret);
//   return '[' + ret.join(',') + ']';
// };
// var traverseSerialize = function(data, ret) {
//   if(data === null) return ret.push('#');
//   ret.push(`${data.val}`);
//   traverseSerialize(data.left, ret);
//   traverseSerialize(data.right, ret);
// }

// /**
//  * Decodes your encoded data to tree.
//  *
//  * @param {string} data
//  * @return {TreeNode}
//  */
// var deserialize = function(data) {
//   let str = data.substring(1, data.length - 1);
//   if(str.length === 0) return null;
//   let nodes = str.split(',')
  
//   return traverseDeserialize(nodes);
// };
// var traverseDeserialize = function(nodes) {
//   if(nodes.length === 0) return null
//   var head = nodes.shift();
//   if(head === '#') return null;
//   var root = new TreeNode(parseInt(head));
//   root.left = traverseDeserialize(nodes);
//   root.right = traverseDeserialize(nodes);
//   return root
// }



function serialize(root) {
  var res = [];
  if(root === null) return '[]'
  traverseSerialize(root);
  return "[" + res.join(',') + "]";
  function traverseSerialize(root) {
    if(root === null) {
      return res.push('#')
    }
    res.push(root.val);
    traverseSerialize(root.left);
    traverseSerialize(root.right)
  }
}

var deserialize = function(data) {
  var strs = data.substring(1, data.length - 1)
  var nodes = strs.split(',');
  if(strs === '') nodes = [];

  return deserializeTraverse(nodes);

  function deserializeTraverse(nodes) {
    if(nodes.length === 0) return null;
    var head = nodes.shift();
    if(head === '#') return null
    var root = new TreeNode(parseInt(head));
    root.left = deserializeTraverse(nodes);
    root.right = deserializeTraverse(nodes);
    return root;
  }
}
/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
// @lc code=end

